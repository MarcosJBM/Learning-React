import * as React from "react";

import Todo from "../components/Todo";

import { TodoContext } from "../context/todoContext";

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
