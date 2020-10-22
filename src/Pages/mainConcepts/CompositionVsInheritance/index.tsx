import React from "react";

interface FancyBorderProps {
  color: string;
}

interface SplitPaneProps {
  left: {};
  right: {};
}

interface DialogProps {
  title: string;
  message: string;
}

interface SignUpDialogProps {
  login: string;
}

//Componente
const FancyBorder: React.FC<FancyBorderProps> = (props) => {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
};

const Dialog: React.FC<DialogProps> = (props) => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
};

class SignUpDialog extends React.Component<{}, SignUpDialogProps> {
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
        title="Programa de Exploração de Marte "
        message="Como gostaria de ser chamado?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Cadastrar-se!</button>
      </Dialog>
    );
  }
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Bem Vindo"
      message="Obrigado por visitar a nossa espaçonave!"
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
      <input type="text" />
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default function CompositionVsInheritance() {
  return (
    <div>
      <h1>Composição VS Herança</h1>
      <p>
        O React tem um poderoso modelo de composição, e por isso recomendamos o
        uso de composição ao invés de herança para reutilizar código entre
        componentes.
      </p>
      <p>
        Nesta página, iremos demonstrar alguns problemas encontrados pelos
        desenvolvedores que estão iniciando com o React e esbarram em situações
        com herança, e mostraremos como podemos resolver utilizando composição.
      </p>
      <h2>Contenção</h2>
      <p>
        Alguns componentes não tem como saber quem serão seus elementos filhos.
        Isso é muito comum para componentes como o SideBar ou Dialog que
        representam “caixas” genéricas.
      </p>
      <p>
        Recomendamos que esses componentes utilizem a prop especial children
        para passar os elementos filhos diretos para sua respectiva saída:
      </p>
      <p>
        Isso permite outros componentes passar elementos filhos no próprio JSX:
      </p>
      <WelcomeDialog />
      <p>
        Qualquer conteúdo dentro da tag JSX do componente {"<FancyBorder>"} vai
        ser passado ao componente FancyBorder como prop children. Desde que
        FancyBorder renderize a {"{props.children} "}dentro de uma {"<div>"}, os
        elementos serão renderizados no resultado final.
      </p>
      <p>
        Mesmo que seja incomum, as vezes pode ser que você precise de diversos
        “buracos” no componente. Em alguns casos você pode criar sua própria
        convenção e não utilizar a prop children:
      </p>
      <App />
      <p>
        Os elementos React como {"<Contacts />"} e {"<Chat />"} são apenas
        objetos, e você pode passá-los como props assim como faz com outros
        tipos de dados. Esta abordagem pode soar familiar como “slots” em outras
        bibliotecas, mas no React não existe limitações sobre o que pode ser
        passado como props.
      </p>
      <h2>Especialização</h2>
      <p>
        Algumas vezes acabamos pensando em componentes como “casos especiais” de
        outros componentes, por exemplo, podemos dizer que o componente
        WelcomeDialog é um caso especial de Dialog.
      </p>
      <p>
        No React, isto também pode ser obtido através do uso de composição, um
        componente específico renderiza um componente mais “genérico” e o
        configura com as suas respectivas props:
      </p>
      <p>
        A composição também irá funcionar para componentes escritos utilizando
        classe:
      </p>
      <SignUpDialog />
      <h2>E sobre a herança?</h2>
      <p>
        O uso de props e composição irá te dar toda flexibilidade que você
        precisa para customizar o comportamento e aparência dos componentes, de
        uma maneira explícita e segura. Lembre-se de que os componentes podem
        aceitar um número variável de props, incluindo valores primitivos, como
        int, array, boolean; assim como elementos Reacts e funções.
      </p>
    </div>
  );
}
