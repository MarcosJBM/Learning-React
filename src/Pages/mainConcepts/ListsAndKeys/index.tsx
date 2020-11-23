import React from "react";

import { listItemsArray, NumberList } from "./components";

export default function ListsAndKeys() {
  return (
    <div>
      <h1>Listas e Chaves</h1>

      <ul>{listItemsArray}</ul>
      <br />
      <NumberList />
    </div>
  );
}
