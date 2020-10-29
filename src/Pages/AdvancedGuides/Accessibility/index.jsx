import React from "react";

function ItemList({ item }) {
  return (
    <Fragment>
      <dt>{item.nome}</dt>
      <dd>{item.descricao}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        <ItemList item={item} key={item.id} />
      ))}
    </dl>
  );
}

export default function Accessibility() {
  return (
    <div>
      <h1>Acessibilidade</h1>
      <h2>Por que Acessibilidade ?</h2>
      <p>
        A acessibilidade da Web (também chamada de ** a11y **) é o design e a
        criação de sites que podem ser usados ​​por todos. O suporte à
        acessibilidade é necessário para permitir que tecnologias assistivas
        interpretem as páginas da web.
      </p>
      <h2>Linguagem HTML</h2>
      <p>
        Linguagem é a base da acessibilidade em um aplicativo da web. Usando os
        elementos HTML corretamente para reforçar o significado da informação em
        nossos sites, muitas vezes a acessibilidade pode vir gratuitamente.
      </p>

      <h2>Programaticamente gerenciando o foco</h2>
      <p>
        Aplicações em React modificam continuamente o HTML DOM durante o tempo
        de execução, às vezes levando à perda de foco do teclado ou a um
        elemento inesperado. Para consertar isso, precisamos programar o foco do
        teclado na direção certa, de maneira programática. Por exemplo,
        redefinindo o foco do teclado para um botão que abriu uma janela modal
        depois que essa janela restrita é fechada.
      </p>
    </div>
  );
}
