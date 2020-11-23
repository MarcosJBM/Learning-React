import React from "react";

import { NameForm, EssayForm, FlavorForm } from "./components";

export default function Forms() {
  return (
    <div>
      <h1>Formulários</h1>

      <NameForm />
      <br />
      <EssayForm />
      <br />
      <FlavorForm />
    </div>
  );
}
