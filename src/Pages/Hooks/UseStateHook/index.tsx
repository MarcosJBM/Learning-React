import React, { ChangeEvent, SyntheticEvent, useState } from "react";

import "./styles.css";

export default function UseStateHook() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    const nameValue = event.target.value;
    setName(nameValue);
  }

  function handleAge(event: ChangeEvent<HTMLInputElement>) {
    const agaValue = event.target.value;
    setAge(agaValue);
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (name === "" && age === "") {
      alert("Preencha os campos por favor");
    } else {
      alert(`Bem Vindo: ${name}`);
    }
  }

  return (
    <div id='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome do Usuário</label>
        <input
          type='text'
          value={name}
          onChange={handleName}
          placeholder='Nome'
        />
        <label htmlFor='age'>Idade do Usuário</label>
        <input
          type='number'
          value={age}
          onChange={handleAge}
          placeholder='Idade'
        />
        <button type='submit'>Salvar</button>
      </form>
    </div>
  );
}
