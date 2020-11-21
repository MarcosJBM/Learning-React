import React from "react";

import { App } from "./components";

export default function Context() {
  return (
    <div>
      <h1>Context</h1>
      <p>
        Contexto (context) disponibiliza uma forma de passar dados entre a
        árvore de componentes sem precisar passar props manualmente em cada
        nível.
      </p>
      <h2>Quando Usar Contexto</h2>
      <p>
        Contexto (context) é indicado para compartilhar dados que podem ser
        considerados “globais” para a árvore de componentes do React. Usuário
        autenticado ou o idioma preferido, são alguns casos comuns.
      </p>
      <App />
      <h2>Antes de você usar Contexto</h2>
      <p>
        Contexto (context) é usado principalmente quando algum dado precisa ser
        acessado por muitos componentes em diferentes níveis. Use contexto
        moderadamente uma vez que isto pode dificultar a reutilização de
        componentes.
      </p>
    </div>
  );
}
