import React, { ChangeEvent, SyntheticEvent, useState } from "react";

export const NameForm = () => {
  const [name, setName] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setName(inputValue);
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    alert(`Nome Enviado: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nome:</label>
      <input type='text' value={name} onChange={handleChange} />
      <button type='submit'>Enviar</button>
    </form>
  );
};

export const EssayForm = () => {
  const [value, setValue] = useState(
    "Por favor, escreva uma dissertação sobre o seu elemento DOM favorito"
  );

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const textAreaValue = event.target.value;
    setValue(textAreaValue);
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    alert("Dissertação Enviada!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dissertação:
        <textarea value={value} onChange={handleChange} />
      </label>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export const FlavorForm = () => {
  const [flavor, setFlavor] = useState("Coco");

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectValue = event.target.value;
    setFlavor(selectValue);
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    alert(`Sabor Selecionado: ${flavor}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='favoriteFlavor'>Escolha um Sabor:</label>
      <select value={flavor} onChange={handleChange}>
        <option value='laranja'>Laranja</option>
        <option value='limao'>Limão</option>
        <option value='coco'>Coco</option>
        <option value='manga'>Manga</option>
      </select>
      <button type='submit'>Enviar</button>
    </form>
  );
};
