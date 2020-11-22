import React, { ChangeEvent, useState } from "react";

import { DialogProps, SplitPaneProps } from "./type";

const Dialog: React.FC<DialogProps> = props => {
  return (
    <div className='dialog-box'>
      <h1 className='dialog-title'>{props.title}</h1>
      <p className='dialog-message'>{props.message}</p>
      {props.children}
    </div>
  );
};

export const SignUpDialog = () => {
  const [login, setLogin] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setLogin(name);
  }

  function handleSignUp() {
    alert(`Bem Vindo, ${login}`);
  }

  return (
    <div className="sign-up-dialog">
      <Dialog
        title='Programa de Exploração de Marte '
        message='Como gostaria de ser chamado?'
      >
        <input type='text' value={login} onChange={handleChange} />
        <button onClick={handleSignUp}>Cadastrar-se</button>
      </Dialog>
    </div>
  );
};

function Contacts() {
  return (
    <div className='contacts'>
      <p>Marcos Botene</p>
      <p>Daniel Araldi</p>
      <p>Gustavo Godoi</p>
      <p>Nathan Rezini</p>
    </div>
  );
}

function Chat() {
  return <input type='text' />;
}

function SplitPane(props: SplitPaneProps) {
  return (
    <div className='split-pane'>
      <fieldset>
        <div className='left'>{props.left}</div>
        <div className='right'>{props.right}</div>
      </fieldset>
    </div>
  );
}

export function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
