import React from "react";

import { ActionLink, Toggle, LoggingButton } from "./components";

export default function HandlingEvents() {
  return (
    <div>
      <h1>Manipulando eventos</h1>
      <p>
        Manipular eventos em elementos React é muito semelhante a manipular
        eventos em elementos do DOM. Existem algumas diferenças de sintaxe:
      </p>
      <li>
        Eventos em React são nomeados usando camelCase ao invés de letras
        minúsculas.
      </li>
      <li>
        Com o JSX você passa uma função como manipulador de eventos ao invés de
        um texto.
      </li>
      <p>Em HTML:</p>
      <p>{'<button onclick="activateLasers()">Ativar lasers</button>'}</p>
      <p>Em React:</p>
      <p>{"<button onClick={activateLasers}>Ativar lasers</button>"}</p>
      <p>
        Outra diferença é que você não pode retornar false para evitar o
        comportamento padrão no React. Você deve chamar preventDefault
        explícitamente. Por exemplo, com HTML simples, para evitar que um link
        abra uma nova página, você pode escrever:
      </p>
      <ActionLink />
      <p>
        Quando você define um componente usando uma classe do ES6, um padrão
        comum é que um manipulador de eventos seja um método na classe.
      </p>
      <Toggle />
      <p>
        Você precisa ter cuidado com o significado do this nos callbacks do JSX.
        Em JavaScript, os métodos de classe não são vinculados por padrão. Se
        você esquecer de fazer o bind de this.handleClick e passá-lo para um
        onClick, o this será undefined quando a função for realmente chamada.
      </p>
      <p>
        Este não é um comportamento específico do React. É uma parte de como
        funcionam as funções em JavaScript. Geralmente, se você referir a um
        método sem () depois dele, como onClick={"this.handleClick"}, você deve
        fazer o bind manual deste método.
      </p>
      <p>
        Se ficar chamando “bind” incomoda você, há duas maneiras de contornar
        isso. Se você estiver usando a sintaxe experimental de campos de classe
        pública, você pode usar campos de classe para vincular callbacks
        corretamente:
      </p>
      <LoggingButton />
    </div>
  );
}
