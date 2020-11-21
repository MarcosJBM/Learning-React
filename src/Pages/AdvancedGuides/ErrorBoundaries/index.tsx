import React from "react";

export default function ErrorBoundaries() {
  return (
    <div>
      <h1>Error Boundaries</h1>
      <p>
        No passado, erros de JavaScript dentro de componentes costumavam
        corromper o estado interno do React e fazê-lo emitir erros
        incompreensíveis nas próximas renderizações. Estes erros eram causados
        por um erro anterior no código da aplicação, mas o React não fornecia um
        meio para tratá-los de forma graciosa nos componentes e não conseguia se
        recuperar deles.
      </p>
      <h2>Introduzindo Error Boundaries</h2>
      <p>
        Error boundaries são componentes React que
        <strong>
          capturam erros de JavaScript em qualquer lugar na sua árvore de
          componentes filhos, registram esses erros e mostram uma UI alternativa
        </strong>
        em vez da árvore de componentes que quebrou. Error boundaries capturam
        estes erros durante a renderização, em métodos do ciclo de vida, e em
        construtores de toda a árvore abaixo delas.
      </p>
      <p>
        Um componente de classe se torna uma error boundary se ele definir um
        (ou ambos) dos métodos do ciclo de vida static
        getDerivedStateFromError() ou componentDidCatch(). Use static
        getDerivedStateFromError() para renderizar uma UI alternativa após o
        erro ter sido lançado. Use componentDidCatch() para registrar
        informações do erro.
      </p>
      <p>
        Error boundaries funcionam como o bloco catch {} do JavaScript, mas para
        componentes. Apenas componentes de classe podem ser error boundaries. Na
        prática, na maioria das vezes você irá declarar um componente error
        boundary uma vez e usá-lo em toda a aplicação.
      </p>
    </div>
  );
}
