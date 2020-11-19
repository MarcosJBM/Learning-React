import React, { SyntheticEvent } from "react";

export function ActionLink() {
  function handleClick(e: SyntheticEvent) {
    e.preventDefault();
    console.log("O botão foi clicado!");
  }

  return (
    <a href='#' onClick={handleClick}>
      Clique aqui!
    </a>
  );
}

export class Toggle extends React.Component<{}, { isToggleOn: boolean }> {
  constructor(props: { isToggleOn: boolean }) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("This is", this);
  };

  render() {
    return <button onClick={this.handleClick}>Clique Aqui</button>;
  }
}
