import React from "react";

import { CounterButton } from "./components";

// class ExamplePureComponent extends React.PureComponent {}

export default function OptimizingPerformance() {
  return (
    <div>
      <h1>Otimizando o Desempenho</h1>
      <p>
        Internamente, o React usa diversas técnicas inteligentes para minimizar
        o número de operações custosas de DOM que são necessárias para alterar a
        UI. Para muitas aplicações, utilizar React fará com que elas tenham uma
        rápida interface sem fazer muito esforço para otimizar performance. No
        entanto, existem diversas maneiras para acelerar sua aplicação React.
      </p>
      <h2>Evite recompilação</h2>
      <p>
        Quando uma propriedade ou estado de um componente é alterado, o React
        decide se uma atualização do DOM atual é necessária comparando o novo
        elemento retornado com o antigo. Quando eles não forem iguais, o React
        irá alterar o DOM.
      </p>
      <h2>Exemplos</h2>
      <p>
        Se seu componente muda quando a variavel state.count muda, você poderia
        ter um shouldComponentUpdate que checa isso.
      </p>
      <CounterButton />
      <p>
        Nesse código, shouldComponentUpdate só está checando se houve alguma
        mudança no state.count. Se esse valor não for alterado, o componente não
        é alterado. Se seu componente ficou mais complexo, você pode usar um
        padrão similar fazendo uma comparação rasa (shallow comparison). Esse
        padrão é comum o suficiente para que o React forneça um helper para usar
        essa lógica - apenas herde de React.PureComponent. Então, essa é uma
        maneira mais simples de alcançar a mesma coisa.
      </p>
      <p>class ExamplePureComponent extends React.PureComponent {}</p>
      <p>
        Na maior parte das vezes, você pode usar React.PureComponent em vez de
        escrever seu próprio shouldComponentUpdate. Ele somente faz comparações
        rasas, então você não pode usá-lo caso as props ou state tenham sido
        alteradas de uma maneira que a comparação rasa não iria detectar.
      </p>
    </div>
  );
}
