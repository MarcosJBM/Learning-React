import React from "react";
import { Link } from "react-router-dom";

import { Container, ReactLogo } from "./styles";

import logo from "../../assets/react-logo.png";

const Home = () => {
  return (
    <Container>
      <ReactLogo src={logo} alt={"React Logo"} />
      <Link to={"/Game"}>Jogo da Velha</Link>
      <Link to={"/MainConcepts"}>Principais Conceitos</Link>
      <Link to={"/AdvancedConcepts"}>Conceitos Avançados</Link>
      <Link to={"/Hooks"}>Hooks</Link>
    </Container>
  );
};

export default Home;
