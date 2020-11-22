import React from "react";

import { App, SignUpDialog } from "./components";

export default function CompositionVsInheritance() {
  return (
    <div className='composition-vs-inheritance'>
      <h1>Composição VS Herança</h1>

      <App />

      <SignUpDialog />
    </div>
  );
}
