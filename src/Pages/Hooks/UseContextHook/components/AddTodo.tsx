import * as React from "react";

import { TodoContext } from "../context/todoContext";

import { ContextType, ITodo } from "../types";

import { Form, TodoInfo, ButtonForm } from "../styles";

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as ContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <Form onSubmit={e => handleSaveTodo(e, formData)}>
      <TodoInfo>
        <label htmlFor='name'>Titulo</label>
        <input onChange={handleForm} type='text' />

        <label htmlFor='description'>Descrição</label>
        <input onChange={handleForm} type='text' />
      </TodoInfo>
      <ButtonForm disabled={formData === undefined ? true : false}>
        Adicionar
      </ButtonForm>
    </Form>
  );
};

export default AddTodo;
