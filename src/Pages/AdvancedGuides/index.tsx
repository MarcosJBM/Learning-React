import React from "react";
import { Link } from "react-router-dom";

export default function AdvancedGuides() {
  return (
    <div>
      <Link to='/Context'>Contexto</Link>
      <br />
      <Link to='/ErrorBoundaries'>Error Boundaries</Link>
      <br />
      <Link to='/Fragments'>Fragmentos</Link>
      <br />
      <Link to='/JSXInDepth'>JSX In Depth</Link>
      <br />
      <Link to='/OptimizingPerformance'>Otimizando o Desempenho</Link>
      <br />
      <Link to='/Portals'>Portals</Link>
      <br />
      <Link to='/RenderProps'>Render Props</Link>
      <br />
      <Link to='/RefsAndDom'>Refs e o Dom</Link>
    </div>
  );
}
