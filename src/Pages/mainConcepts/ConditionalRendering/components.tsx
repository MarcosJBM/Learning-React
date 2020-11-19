import React from "react";

import { LoginButton, LogoutButton } from "./functions";

import { Props, MailProps, WarningBannerProps, PageProps } from "./type";

function UserGreeting() {
  return <h3>Welcome Back!</h3>;
}

function GuestGreeting() {
  return <h3>Please sign up.</h3>;
}

export function Greeting(props: Props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export class LoginControl extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

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

export class Page extends React.Component<{}, PageProps> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      showWarning: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
