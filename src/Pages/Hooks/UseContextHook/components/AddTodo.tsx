import * as React from "react";

import { TodoContext } from "../context/todoContext";
import { ContextType, ITodo } from "../types";

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
    <form className='form' onSubmit={e => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Titulo</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        <div>
          <label htmlFor='description'>Descrição</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Adicionar
      </button>
    </form>
  );
};

export default AddTodo;
