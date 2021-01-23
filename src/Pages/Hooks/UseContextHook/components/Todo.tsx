import * as React from "react";

import { ITodo } from "../types";

import { Card, CardText, CardButton } from "../styles";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";

  return (
    <Card>
      <CardText>
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </CardText>
      <CardButton
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? "hide-button" : ""}
      >
        Concluido
      </CardButton>
    </Card>
  );
};

export default Todo;
