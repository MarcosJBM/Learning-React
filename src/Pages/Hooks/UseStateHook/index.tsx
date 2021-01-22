import React, { SyntheticEvent, useState } from "react";

import { Container, Form, Button } from "./styles";

const UseStateHook = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (name === "" && age === "") {
      alert("Preencha os campos por favor");
    } else {
      alert(`Bem Vindo: ${name}`);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome do Usuário</label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Nome'
        />
        <label htmlFor='age'>Idade do Usuário</label>
        <input
          type='number'
          value={age}
          onChange={e => setAge(e.target.value)}
          placeholder='Idade'
        />
        <Button type='submit'>Salvar</Button>
      </Form>
    </Container>
  );
};

export default UseStateHook;
