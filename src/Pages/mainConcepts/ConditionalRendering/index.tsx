import React from "react";

import { Greeting, LoginControl, MailBox, Page } from "./components";

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
      <p>
        Em React, você pode criar componentes distintos que encapsulam o
        comportamento que você precisa. Então, você pode renderizar apenas
        alguns dos elementos, dependendo do estado da sua aplicação.
      </p>
      <p>
        Renderização condicional em React funciona da mesma forma que condições
        funcionam em JavaScript. Use operadores de JavaScript como if ou
        operador condicional para criar elementos representando o estado atual,
        e deixe o React atualizar a UI para corresponde-los.
      </p>
      <p>
        Nós vamos criar um componente Greeting que mostra um dos outros dois
        componentes se o usuário estiver logado ou não:
      </p>
      <p>
        Este exemplo renderiza um “greeting” diferente dependendo do valor da
        prop isLoggedIn.
      </p>
      <br />
      <Greeting isLoggedIn={false} />
      <br />
      <h2>Variáveis de Elementos</h2>
      <p>
        Você pode usar variáveis para guardar elementos. Isto pode te ajudar a
        renderizar condicionalmente parte do componente enquanto o resto do
        resultado não muda.
      </p>
      <p>
        No exemplo abaixo, nós vamos criar um componente stateful chamado
        LoginControl.
      </p>
      <p>
        O componente irá renderizar o {"<LoginButton />"} ou
        {"<LogoutButton />"}
        dependendo do estado atual. Ele tambem irá renderizar {"<Greeting />"}
        do exemplo anterior:
      </p>
      <br />
      <LoginControl />
      <br />
      <p>
        Declarar uma variável e usar uma declaração condicional if é uma ótima
        maneira de renderizar um componente, mas às vezes você pode querer usar
        uma sintaxe mais curta. Existem algumas maneiras para utilizar condições
        inline em JSX, explicadas abaixo.
      </p>
      <h2>If inline com o Operador Lógico {"&&"}</h2>
      <p>
        Você pode incorporar expressão em JSX encapsulando em chaves. Isto
        inclui o operador lógico {"&&"} de JavaScript. Isto pode ser conveniente
        para incluir um elemento condicionalmente:
      </p>
      <br />
      <MailBox unreadMessages={messages} />
      <br />
      <h2>If-Else inline com Operador Condicional</h2>
      <p>
        Outro método para renderizar elementos inline é utilizar o operador
        condicional em JavaScript condição ? true : false.
      </p>
      <h2>Evitando que um Componente seja Renderizado</h2>
      <p>
        Em casos raros você pode desejar que um componente se esconda ainda que
        ele tenha sido renderizado por outro componente. Para fazer isso,
        retorne null ao invés do resultado renderizado.
      </p>
      <p>
        No exemplo abaixo, o {"<WarningBanner />"} é renderizado dependendo do
        valor da prop chamada warn. Se o valor da prop é false, o componente não
        é renderizado:
      </p>
      <br />
      <Page />
      <br />
    </div>
  );
}
