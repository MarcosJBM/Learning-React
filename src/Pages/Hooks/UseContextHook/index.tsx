import * as React from "react";

import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";

import TodoProvider from "./context/todoContext";

import { Main } from "./styles";

const App = () => {
  return (
    <TodoProvider>
      <Main>
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </Main>
    </TodoProvider>
  );
};

export default App;
