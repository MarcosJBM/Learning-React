import React from "react";
import { Link } from "react-router-dom";

function Hooks() {
  return (
    <div>
      <Link to='/UseStateHook'>Use State Hook</Link>
      <br />
      <Link to='/UseEffectHook'>Use Effect Hook</Link>
      <br />
      <Link to='/UseMemoHook'>Use Memo Hook</Link>
      <br />
      <Link to='/UseContextHook'>Use Context Hook</Link>
    </div>
  );
}

export default Hooks;
