import React from 'react';

interface Props {
  isLoggedIn: boolean;
}

interface MailProps {
  unreadMessages: string[];
}

interface WarningBannerProps {
  warn: boolean;
}

interface PageProps {
  showWarning: boolean;
}

function UserGreeting() {
  return <h3>Welcome Back!</h3>;
}

function GuestGreeting() {
  return <h3>Please sign up.</h3>;
}

function LoginButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Logout</button>;
}

function Greeting(props: Props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

class LoginControl extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

function MailBox(props: MailProps) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h3>Hello!</h3>
      {unreadMessages.length > 0 && (
        <h3>You have {unreadMessages.length} unread messages</h3>
      )}
    </div>
  );
}

const messages = [
  'React',
  'React Native',
  'NodeJS',
  'JavaScript',
  'TypeScript',
];

function WarningBanner(props: WarningBannerProps) {
  if (!props.warn) {
    return null;
  }

  return <div>Warning!</div>;
}

class Page extends React.Component<{}, PageProps> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      showWarning: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default function ConditionalRendering() {
  return (
    <div>
      <h1>Renderização condicional</h1>
      <p>
        Em React, você pode criar componentes distintos que encapsulam o
        comportamento que você precisa. Então, você pode renderizar apenas
        alguns dos elementos, dependendo do estado da sua aplicação.
      </p>
      <p>
        Renderização condicional em React funciona da mesma forma que condições
        funcionam em JavaScript. Use operadores de JavaScript como if ou
        operador condicional para criar elementos representando o estado atual,
        e deixe o React atualizar a UI para corresponde-los.
      </p>
      <p>
        Nós vamos criar um componente Greeting que mostra um dos outros dois
        componentes se o usuário estiver logado ou não:
      </p>
      <p>
        Este exemplo renderiza um “greeting” diferente dependendo do valor da
        prop isLoggedIn.
      </p>
      <Greeting isLoggedIn={false} />
      <h2>Variáveis de Elementos</h2>
      <p>
        Você pode usar variáveis para guardar elementos. Isto pode te ajudar a
        renderizar condicionalmente parte do componente enquanto o resto do
        resultado não muda.
      </p>
      <p>
        No exemplo abaixo, nós vamos criar um componente stateful chamado
        LoginControl.
      </p>
      <p>
        O componente irá renderizar o {'<LoginButton />'} ou{' '}
        {'<LogoutButton />'}
        dependendo do estado atual. Ele tambem irá renderizar {
          '<Greeting />'
        }{' '}
        do exemplo anterior:
      </p>
      <LoginControl />
      <p>
        Declarar uma variável e usar uma declaração condicional if é uma ótima
        maneira de renderizar um componente, mas às vezes você pode querer usar
        uma sintaxe mais curta. Existem algumas maneiras para utilizar condições
        inline em JSX, explicadas abaixo.
      </p>
      <h2>If inline com o Operador Lógico {'&&'}</h2>
      <p>
        Você pode incorporar expressão em JSX encapsulando em chaves. Isto
        inclui o operador lógico {'&&'} de JavaScript. Isto pode ser conveniente
        para incluir um elemento condicionalmente:
      </p>
      <MailBox unreadMessages={messages} />
      <h2>If-Else inline com Operador Condicional</h2>
      <p>
        Outro método para renderizar elementos inline é utilizar o operador
        condicional em JavaScript condição ? true : false.
      </p>
      <h2>Evitando que um Componente seja Renderizado</h2>
      <p>
        Em casos raros você pode desejar que um componente se esconda ainda que
        ele tenha sido renderizado por outro componente. Para fazer isso,
        retorne null ao invés do resultado renderizado.
      </p>
      <p>
        No exemplo abaixo, o {'<WarningBanner />'} é renderizado dependendo do
        valor da prop chamada warn. Se o valor da prop é false, o componente não
        é renderizado:
      </p>
      <Page />
    </div>
  );
}
