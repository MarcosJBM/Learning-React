import React from 'react';
import { Link } from 'react-router-dom';

export default function MainConcepts() {
  return (
    <div>
      <Link to="/IntroducingJSX">Introduzindo JSX</Link>
      <br />
      <Link to="/ComponentsAndProps">Componentes e Props</Link>
      <br />
      <Link to="/StateAndLifeCycle">State e Ciclo de Vida</Link>
      <br />
      <Link to="/HandlingEvents">Manipulando Eventos</Link>
      <br />
      <Link to="/ConditionalRendering">Renderização Condicional</Link>
      <br />
      <Link to="/ListsAndKeys">Listas e Chaves</Link>
      <br />
      <Link to="/Forms">Formulários</Link>
      <br />
      <Link to="/RaisingTheState">Elevando o State</Link>
    </div>
  );
}
