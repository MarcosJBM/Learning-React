import React, { Fragment, useEffect, useState } from "react";
import { initialState, Reducer } from "./functions";

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

export function CounterTwo() {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  return (
    <Fragment>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </Fragment>
  );
}
