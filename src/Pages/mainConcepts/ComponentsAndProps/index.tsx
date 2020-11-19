import React from "react";

import { Welcome, Comment } from "./components";

export default function ComponentsAndProps() {
  const authorImage =
    "https://avatars1.githubusercontent.com/u/67931411?s=460&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4";

  return (
    <div>
      <h1>Componentes e Props</h1>
      <p>
        Componentes permitem você dividir a UI em partes independentes,
        reutilizáveis e pensar em cada parte isoladamente.
      </p>
      <h2>Renderizando um Componente</h2>
      <p>
        Quando o React vê um elemento representando um componente, ele passa
        atributos JSX e componentes filhos para esse componente como um único
        objeto. Nós chamamos esse objeto de “props”.
      </p>
      <Welcome name={"Marcos"} />
      <h2>Extraindo Componentes</h2>
      <p>Não tenha medo de dividir componentes em componentes menores.</p>
      <p>
        Ele aceita author (um objeto), text (uma string) e date (uma data) como
        props
      </p>
      <p>
        Esse componente pode ser complicado de alterar. Também é difícil
        reutilizar suas partes individuais. Vamos extrair alguns componentes
        dele.
      </p>
      <p>Primeiro, nós vamos extrair Avatar:</p>
      <p>
        O Avatar não precisa saber que está sendo renderizado dentro do Comment.
        É por isso que nós demos ao seu prop um nome genérico: user em vez de
        author.
      </p>
      <p>
        Nós recomendamos nomear props a partir do ponto de vista do próprio
        componente ao invés do contexto em que ele está sendo usado.
      </p>
      <p>
        Extrair componentes pode parecer um trabalho pesado no começo, mas ter
        uma paleta de componentes reutilizáveis, compensa no futuro quando for
        trabalhar em aplicativos maiores. Uma boa regra é que se uma parte da
        sua UI for usada várias vezes, é uma boa candidata a ser extraída para
        um componente separado.
      </p>
      <Comment
        date={new Date()}
        text={"Opa meu bom!"}
        author={{ avatarURL: authorImage, name: "Marcos" }}
      />
      <h2>Props são Somente Leitura</h2>
      <p>
        Independente se você declarar um componente como uma função ou uma
        classe, ele nunca deve modificar seus próprios props
      </p>
      <p>
        As UIs de aplicativos são dinâmicas e mudam com o tempo. Na próxima
        seção, nós vamos introduzir um novo conceito de “state”. O state permite
        aos componentes React alterar sua saída ao longo do tempo em resposta a
        ações do usuário, respostas de rede e quaisquer outras coisas, sem
        violar essa regra.
      </p>
    </div>
  );
}
