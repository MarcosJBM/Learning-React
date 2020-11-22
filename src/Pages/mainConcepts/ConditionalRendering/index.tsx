import React from "react";

import { LoginControl, MailBox, Page } from "./components";

export default function ConditionalRendering() {
  const messages = [
    "React",
    "React Native",
    "NodeJS",
    "JavaScript",
    "TypeScript",
  ];

  return (
    <div>
      <h1>Renderização condicional</h1>

      <LoginControl />

      <MailBox unreadMessages={messages} />

      <Page />
    </div>
  );
}
