import React, { Component, Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks ${count}`;
  });

  return (
    <Fragment>
      <p>
        Voce clicou <strong>{count}</strong> vezes.
      </p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </Fragment>
  );
}

const Outsider = () => ReactDOM.createPortal(<Counter />, document.body);

export class App extends Component {
  render = () => {
    return <Outsider />;
  };
}
