import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks ${count}`;
  });

  return (
    <div>
      <p>
        Voce clicou <strong>{count}</strong> vezes.
      </p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
}

export default function HooksSummary() {
  return (
    <div>
      <h1>Hooks de forma resumida</h1>
      <p>
        Hooks permitem que você use o state e outros recursos do React sem
        escrever uma classe.
      </p>
      <h2>📌 State Hook</h2>
      <p>
        useState é um Hook, nós o chamamos dentro de um componente funcional
        para adicionar alguns states locais a ele. React irá preservar este
        state entre re-renderizações. useState retorna um par: o valor do state
        atual e uma função que permite atualizá-lo. Podemos chamar essa função a
        partir de um manipulador de evento ou de qualquer outro lugar. É
        parecido com this.setState em uma classe, exceto que não mescla o antigo
        state com o novo.
      </p>
      <p>
        O único argumento para useState é o state inicial. Diferente de
        this.state, o state não precisa ser um objeto — apesar de que possa ser
        se você quiser. O argumento de state inicial é utilizado apenas durante
        a primeira renderização.
      </p>
      <Counter />
      <h3>Mas, o que é um Hook?</h3>
      <p>
        Hooks são funções que permitem a você “ligar-se” aos recursos de state e
        ciclo de vida do React a partir de componentes funcionais. Hooks não
        funcionam dentro de classes — eles permitem que você use React sem
        classes.
      </p>
      <h2>⚡️ Hook de Efeito</h2>
      <p>
        Você provavelmente já realizou obtenção de dados (data fetching),
        subscrições (subscriptions) ou mudanças manuais no DOM através de
        componentes React antes. Nós chamamos essas operações de “efeitos
        colaterais” (side effects ou apenas effects) porque eles podem afetar
        outros componentes e não podem ser feitos durante a renderização.
      </p>
      <p>
        O Hook de Efeito, useEffect, adiciona a funcionalidade de executar
        efeitos colaterais através de um componente funcional. Segue a mesma
        finalidade do componentDidMount, componentDidUpdate, e
        componentWillUnmount em classes React, mas unificado em uma mesma API.
      </p>
      <p>
        Quando você chama useEffect, você está dizendo ao React para executar a
        sua função de “efeito” após liberar as mudanças para o DOM. Efeitos são
        declarados dentro do componente, para que eles tenham acesso as suas
        props e state. Por padrão, React executa os efeitos após cada
        renderização — incluindo a primeira renderização.
      </p>
      <h2>✌️ Regras dos Hooks</h2>
      <p>
        Hooks são funções JavaScript, mas eles impões duas regras adicionais:
      </p>
      <ul>
        <li>
          Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de
          loops, condições ou funções aninhadas.
        </li>
        <li>
          Apenas chame Hooks de componentes funcionais. Não chame Hooks de
          funções JavaScript comuns.
        </li>
      </ul>
    </div>
  );
}
