import React, { Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundaries";

import("./math").then(math => {
  console.log(math.Add(2, 2));
});

// Funciona apenas com arquivos .tsx
const OtherComponent = React.lazy(() => import("./otherComponent"));
const AnotherComponent = React.lazy(() => import("./anotherComponent"));

function MyComponent() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}

export default function CodeSplitting() {
  return (
    <div>
      <h1>Dividindo o Código</h1>
      <h2>Empacotamento</h2>
      <p>
        maioria das aplicações React serão “empacotadas” usando ferramentas como
        Webpack, Rollup ou Browserify. Empacotamento (Bundling) é o processo
        onde vários arquivos importados são unidos em um único arquivo: um
        “pacote” (bundle). Este pacote pode ser incluído em uma página web para
        carregar uma aplicação toda de uma vez.
      </p>
      <span>Exemplo</span>
      <h4>App:</h4>
      <p>
        {'import {Add} from "./math";'}
        <br />
        {"console.log(Add(2, 2));"}
      </p>
      <p>{"export function Add(a: number, b: number) { return a + b;}"}</p>
      <h4>Bundle:</h4>
      <p>
        {"function add(a, b) {return a + b;} "}
        <br />
        {"console.log(add(16, 26)); // 42"}
      </p>
      <h2>Dividindo o Código</h2>
      <p>
        Empacotamento é excelente, mas à medida que sua aplicação cresce, seu
        pacote crescerá também. Especialmente se você estiver usando grandes
        bibliotecas de terceiros. Você precisa ficar de olho em todo código que
        está incluindo no seu pacote, pois assim você evitará que o mesmo fique
        tão grande que faça sua aplicação levar um tempo maior para carregar.
      </p>
      <p>
        Dividir o código de sua aplicação pode te ajudar a carregar somente o
        necessário ao usuário, o que pode melhorar dramaticamente o desempenho
        de sua aplicação. Embora você não tenha reduzido a quantidade total de
        código de sua aplicação, você evitou carregar código que o usuário
        talvez nunca precise e reduziu o código inicial necessário durante o
        carregamento.
      </p>
      <h2>import()</h2>
      <p>
        A melhor forma de introduzir a divisão de código em sua aplicação é
        através da sintaxe dinâmica import().
      </p>
      <h4>Antes:</h4>
      <p>
        {"import { Add } from './math'"}
        <br />
        {"console.log(Add(2, 2));"}
      </p>
      <h4>Depois:</h4>
      {'import("./math").then((math) => {console.log(math.Add(2, 2));});'}
      <p>
        Quando o Webpack encontra esta sintaxe, automaticamente ele divide o
        código de sua aplicação.
      </p>
      <h2>React.lazy</h2>
      <p>
        função do React.lazy é permitir a você renderizar uma importação
        dinâmica como se fosse um componente comum.
      </p>
      <h4>Antes:</h4>
      <p>{'import OtherComponent from "./OtherComponent";'}</p>
      <h4>Depois:</h4>
      <p>
        {"const OtherComponent = React.lazy(() => import('./OtherComponent'));"}
      </p>
      <p>
        Isto automaticamente carregará o pacote contendo o OtherComponent quando
        este componente é renderizado pela primeira vez.
      </p>
      <p>
        React.lazy recebe uma função que deve retornar um import(). Este último
        retorna uma Promise que é resolvida para um módulo com um export default
        que contém um componente React.
      </p>
      <p>
        O componente lazy pode ser renderizado dentro de um componente Suspense,
        o que no permite mostrar algum conteúdo de fallback (como um indicador
        de carregamento) enquanto aguardamos o carregamento do componente lazy.
      </p>
      <MyComponent />
      <p>
        A prop fallback aceita qualquer elemento React que você deseja
        renderizar enquanto se espera o componente ser carregado. Você pode
        colocar o componente Suspense em qualquer lugar acima do componente
        dinâmico. Você pode até mesmo ter vários componentes dinâmicos
        envolvidos em um único componente Suspense.
      </p>
      <h2>Error boundaries</h2>
      <p>
        Se algum outro módulo não for carregado (por exemplo, devido a uma falha
        na conexão), será disparado um erro. Você pode manusear estes erros para
        mostrar uma ótima experiência de usuário e gerenciar a recuperação
        através de Error Boundaries. Uma vez que tenha criado seu Error
        Boundary, você pode usá-lo em qualquer lugar acima de seus componentes
        dinâmicos para exibir uma mensagem de erro quando houver uma falha de
        conexão.
      </p>
      <h2>Divisão de Código Baseada em Rotas</h2>
      <p>
        Decidir onde introduzir a divisão de código em sua aplicação pode ser um
        pouco complicado. Você precisa ter certeza de escolher locais que
        dividirão os pacotes de forma uniforme, mas que não interrompa a
        experiência do usuário.
      </p>
      <p>
        Um bom lugar para começar é nas rotas. A maioria das pessoas na web
        estão acostumadas com transições entre páginas que levam algum tempo
        para carregar. Você também tende a re-renderizar toda a página de uma só
        vez para que seus usuários não interajam com outros elementos na página
        ao mesmo tempo.
      </p>
    </div>
  );
}
