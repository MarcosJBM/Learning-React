import * as React from "react";

import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";
import { ContextType, ITodo } from "../types";

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as ContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
