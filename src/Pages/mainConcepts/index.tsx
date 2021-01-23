import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const MainConcepts = () => {
  return (
    <Container>
      <Link to={"/ComponentsAndProps"}>Componentes e Props</Link>
      <Link to={"/StateAndLifeCycle"}>State e Ciclo de Vida</Link>
      <Link to={"/Forms"}>Formulários</Link>
      <Link to={"/RaisingTheState"}>Elevando o State</Link>
    </Container>
  );
};

export default MainConcepts;
