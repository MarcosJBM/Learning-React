import React from "react";
import { App } from "./portals";

export default function Portals() {
  return (
    <div>
      <h1>Portals</h1>
      <p>
        Portals fornece uma forma elegante de renderizar um elemento filho
        dentro de um nó DOM que existe fora da hierarquia do componente pai.
      </p>
      <h2>Quando usar?</h2>
      <li>Modals</li>
      <li>Tooltips</li>
      <App />
    </div>
  );
}
