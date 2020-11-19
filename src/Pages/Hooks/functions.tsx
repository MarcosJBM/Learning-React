import React, { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks ${count}`;
  });

  return (
    <div>
      <p>
        Voce clicou <strong>{count}</strong> vezes.
      </p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
}
