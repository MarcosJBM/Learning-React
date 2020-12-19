import React from "react";
import { Link } from "react-router-dom";

export default function AdvancedGuides() {
  return (
    <div>
      <Link to='/JSXInDepth'>JSX In Depth</Link>
      <br />
      <Link to='/Portals'>Portals</Link>
      <br />
      <Link to='/RenderProps'>Render Props</Link>
    </div>
  );
}
