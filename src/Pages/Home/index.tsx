import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <Link to='/Game'>Jogo da Velha</Link>
      <br />
      <Link to='/MainConcepts'>Principais Conceitos</Link>
      <br />
      <Link to='/AdvancedGuides'>Guias Avançados</Link>
      <br />
      <Link to='/Hooks'>Hooks</Link>
    </Fragment>
  );
}

export default Home;
