import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const MainConcepts = () => {
  return (
    <Container>
      <Link to={"/ComponentsAndProps"}>Componentes e Props</Link>
      <Link to={"/StateAndLifeCycle"}>State e Ciclo de Vida</Link>
      <Link to={"/HandlingEvents"}>Manipulando Eventos</Link>
      <Link to={"/ConditionalRendering"}>Renderização Condicional</Link>
      <Link to={"/ListsAndKeys"}>Listas e Chaves</Link>
      <Link to={"/Forms"}>Formulários</Link>
      <Link to={"/RaisingTheState"}>Elevando o State</Link>
      <Link to={"/CompositionVsInheritance"}>Composição VS Herança</Link>
    </Container>
  );
};

export default MainConcepts;
