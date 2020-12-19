import * as React from "react";

import { ITodo } from "../types";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";
  return (
    <div className='card'>
      <div className='card--text'>
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <button
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? `hide-button` : "card--button"}
      >
        Concluido
      </button>
    </div>
  );
};

export default Todo;
