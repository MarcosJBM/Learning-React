import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Hooks = () => {
  return (
    <Container>
      <Link to={"/UseStateHook"}>Use State Hook</Link>
      <Link to={"/UseEffectHook"}>Use Effect Hook</Link>
      <Link to={"/UseMemoHook"}>Use Memo Hook</Link>
      <Link to={"/UseContextHook"}>Use Context Hook</Link>
    </Container>
  );
};

export default Hooks;
