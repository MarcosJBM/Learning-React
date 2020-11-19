import React from "react";

import {
  FancyBorderProps,
  DialogProps,
  SignUpDialogProps,
  SplitPaneProps,
} from "./type";

const FancyBorder: React.FC<FancyBorderProps> = props => {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
};

const Dialog: React.FC<DialogProps> = props => {
  return (
    <FancyBorder color='blue'>
      <h1 className='dialog-title'>{props.title}</h1>
      <p className='dialog-message'>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
};

export class SignUpDialog extends React.Component<{}, SignUpDialogProps> {
  constructor(props: SignUpDialogProps) {
    super(props);
    this.state = {
      login: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      login: event.target.value,
    });
  }

  handleSignUp() {
    alert(`Bem Vindo, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog
        title='Programa de Exploração de Marte '
        message='Como gostaria de ser chamado?'
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Cadastrar-se!</button>
      </Dialog>
    );
  }
}

export function WelcomeDialog() {
  return (
    <Dialog
      title='Bem Vindo'
      message='Obrigado por visitar a nossa espaçonave!'
    />
  );
}

function SplitPane(props: SplitPaneProps) {
  return (
    <div>
      <fieldset>
        <div>{props.left}</div>
        <div>{props.right}</div>
      </fieldset>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <p>Marcos Botene</p>
      <p>Daniel Araldi</p>
      <p>Gustavo Godoi</p>
      <p>Nathan Rezini</p>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <input type='text' />
    </div>
  );
}

export function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
