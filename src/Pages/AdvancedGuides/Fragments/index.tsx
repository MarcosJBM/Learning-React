import React from "react";

import { Columns } from "./components";

export default function Fragments() {
  return (
    <div>
      <h1>Fragmentos</h1>
      <p>
        Um padrão comum no React é que um componente pode retornar múltiplos
        elementos.
      </p>
      <h2>Motivação</h2>
      <p>
        Digamos que voce tenha um componente chamado {"<Columns />"}, que irá
        retornar múltiplos elementos {"<td>"}, se uma Div for utilizada dentro
        do render() de {"<Columns />"}, então o HTML resultante será inválido,
        pois a Div será renderizada na Tabela.
      </p>
      <p>
        Para resolver este problema, apenas utilize um {"</Fragment>"} invés de
        uma Div
      </p>
      <Columns />
    </div>
  );
}
