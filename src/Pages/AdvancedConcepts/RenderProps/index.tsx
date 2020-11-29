import React from "react";

import { MouseTracker } from "./components";

export default function RenderProps() {
  return (
    <div>
      <h1>Render Props</h1>
      <p>
        O termo “render prop” se refere a uma técnica de compartilhar código
        entre componentes React passando uma prop cujo valor é uma função.
      </p>
      <p>
        Um componente com uma render prop recebe uma função que retorna um
        elemento React e a invoca no momento de renderização, não sendo
        necessário para o componente implementar uma lógica própria.
      </p>
      <fieldset>
        <MouseTracker />
      </fieldset>
    </div>
  );
}
