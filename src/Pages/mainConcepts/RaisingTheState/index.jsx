import React from "react";

import { BoilingVerdict, Calculator } from "./components";

export default function RaisingTheState() {
  return (
    <div>
      <h1>Elevando o State</h1>

      <BoilingVerdict celsius={100} />

      <Calculator />
    </div>
  );
}
