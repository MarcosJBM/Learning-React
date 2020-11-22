import React, { useState } from "react";

import { LoginButton, LogoutButton } from "./functions";

import { MailProps, WarningBannerProps } from "./type";

export const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
};

export function MailBox(props: MailProps) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h3>Hello!</h3>
      {unreadMessages.length > 0 && (
        <h3>You have {unreadMessages.length} unread messages</h3>
      )}
    </div>
  );
}

function WarningBanner(props: WarningBannerProps) {
  if (!props.warn) {
    return null;
  }

  return <div>Warning!</div>;
}

export const Page = () => {
  const [showWarning, setShowWarning] = useState(Boolean);

  function handleToggleClick() {
    setShowWarning(!showWarning);
  }

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? "Hide" : "Show"}
      </button>
    </div>
  );
};
