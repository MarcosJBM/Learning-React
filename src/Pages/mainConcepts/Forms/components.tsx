import { SyntheticEvent, useState } from 'react';

export const NameForm = () => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    alert(`Nome Enviado: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nome:</label>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button type='submit'>Enviar</button>
    </form>
  );
};

export const EssayForm = () => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    alert('Dissertação Enviada!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dissertação:
        <textarea value={value} onChange={e => setValue(e.target.value)} />
      </label>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export const FlavorForm = () => {
  const [flavor, setFlavor] = useState<string>('Coco');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    alert(`Sabor Selecionado: ${flavor}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='favoriteFlavor'>Escolha um Sabor:</label>
      <select value={flavor} onChange={e => setFlavor(e.target.value)}>
        <option value='laranja'>Laranja</option>
        <option value='limao'>Limão</option>
        <option value='coco'>Coco</option>
        <option value='manga'>Manga</option>
      </select>
      <button type='submit'>Enviar</button>
    </form>
  );
};
