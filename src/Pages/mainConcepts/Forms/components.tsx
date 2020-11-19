import React, { SyntheticEvent } from "react";

export class NameForm extends React.Component<{}, { value: string }> {
  constructor(props: { value: string }) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    alert("Um nome foi enviado" + this.state.value);
  }

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <label htmlFor='nome'>Nome:</label>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type='submit' value='salvar'>
          Salvar
        </button>
      </form>
    );
  }
}

export class EssayForm extends React.Component<{}, { value: string }> {
  constructor(props: { value: string }) {
    super(props);
    this.state = {
      value:
        "Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dissertação:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Enviar' />
      </form>
    );
  }
}

export class FlavorForm extends React.Component<{}, { value: string }> {
  constructor(props: { value: string }) {
    super(props);
    this.state = { value: "coco" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='favoriteFlavor'>
          Escolha seu sabor favorito:
          <select
            name=''
            id=''
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value='laranja'>Laranja</option>
            <option value='limao'>Limão</option>
            <option value='coco'>Coco</option>
            <option value='manga'>Manga</option>
          </select>
        </label>
        <input type='submit' value='Enviar' />
      </form>
    );
  }
}
