import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const AdvancedGuides = () => {
  return (
    <Container>
      <Link to={"/JSXInDepth"}>JSX In Depth</Link>
      <Link to={"/Portals"}>Portals</Link>
      <Link to={"/RenderProps"}>Render Props</Link>
    </Container>
  );
};

export default AdvancedGuides;
