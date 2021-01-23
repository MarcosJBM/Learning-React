import * as React from "react";

import { ContextType, ITodo } from "../types";

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: "Tomar Cafe",
      description: "Fazer cafe ao acordar",
      status: false,
    },
    {
      id: 2,
      title: "Tomar banho",
      description: "Só isso mesmo",
      status: true,
    },
  ]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
