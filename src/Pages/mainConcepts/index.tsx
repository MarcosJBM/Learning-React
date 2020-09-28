import React, { SyntheticEvent } from "react";

import "./style.css";
import { number } from "prop-types";

//===============================================
//Introduzindo JSX
//===============================================

interface UserProps {
  firstName: string;
  lastName: string;
}

//Incorporando Expressões em JSX
const name = "Marcos Botene";
const element = <h3>{name}</h3>;

function formatName(user: UserProps) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Daniel",
  lastName: "Araldi"
};

const returnUser = <h3>{formatName(user)}</h3>;

//JSX Também é uma Expressão
function getGreeting(user: UserProps) {
  if (user) {
    return <h3>Hello {formatName(user)!}</h3>;
  } else {
    return <h3>Hello Stranger!</h3>;
  }
}

const returnHello = <h3>{getGreeting(user)}</h3>;

//===============================================
//Componentes e Props
//===============================================

interface CommentProps {
  author: {
    avatarURL: string;
    name: string;
  };
  text: string;
  date: Date;
}

interface AvatarProps {
  user: {
    avatarURL: string;
    name: string;
  };
}

//Renderizando um Componente
function Welcome(props: { name: string }) {
  return <h3>Hello, {props.name}</h3>;
}

//Extraindo Componentes
function formatDate(date: Date) {
  return date.toLocaleDateString();
}

function Comment(props: CommentProps) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="commentText">{props.text}</div>
      <div className="commentDate">{formatDate(props.date)}</div>
    </div>
  );
}

function Avatar(props: AvatarProps) {
  return (
    <img className="Avatar" src={props.user.avatarURL} alt={props.user.name} />
  );
}

function UserInfo(props: AvatarProps) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">{props.user.name}</div>
    </div>
  );
}

//===============================================
//Estado e Ciclo de Vida
//===============================================

interface ClockProps {
  date: Date;
  timerID: number;
  tick: () => Date;
}

class Clock extends React.Component<{}, ClockProps> {
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
      timerID: 0,
      tick: () => new Date()
    };
  }

  componentDidMount(this: ClockProps) {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(this: ClockProps) {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

//===============================================
//Manipulando eventos
//===============================================

function ActionLink() {
  function handleClick(e: SyntheticEvent) {
    e.preventDefault();
    console.log("O botão foi clicado!");
  }

  return (
    <a href="#" onClick={handleClick}>
      Clique aqui!
    </a>
  );
}

interface ToggleProps {
  isToggleOn: boolean;
}

class Toggle extends React.Component<{}, ToggleProps> {
  constructor(props: ToggleProps) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
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

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("This is", this);
  };

  render() {
    return <button onClick={this.handleClick}>Clique Aqui</button>;
  }
}

//===============================================
//Renderização condicional
//===============================================

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
      isLoggedIn: false
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
  "React",
  "React Native",
  "NodeJS",
  "JavaScript",
  "TypeScript"
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
      showWarning: true
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

//===============================================
//Listas e Chaves
//===============================================

interface NumberListProps {
  numbers: number[];
}

const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map(numbers => numbers * 2);
console.log(doubled);

const listItemsArray = numbers.map(number => <li>{number}</li>);

function ListItem(props: { value: number }) {
  return <li>{props.value}</li>;
}

function NumberList(props: NumberListProps) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(number => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

//===============================================
//Formulários
//===============================================

interface NameFormProps {
  value: string;
}

class NameForm extends React.Component<{}, NameFormProps> {
  constructor(props: NameFormProps) {
    super(props);
    this.state = { value: "" };
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" value="salvar">
          Salvar
        </button>
      </form>
    );
  }
}

const mainConcepts = () => {
  return (
    <div>
      <header>
        <h1>Introduzindo JSX</h1>
      </header>
      <h2>Incorporando Expressões em JSX</h2>
      <p>{element}</p>
      <p>
        Voce pode inserir qualquer expressão JavaScript válida dentro das chaves
        em JSX
      </p>
      <p>
        No exemplo abaixo, incorporamos o resultado da chamada de uma função
        JavaScript, formatName(user), dentro de um elemento h3.
      </p>
      <p>{returnUser}</p>
      <h2>JSX Também é uma Expressão</h2>
      <p>
        você pode usar JSX dentro de condições if e laços for, atribuí-lo a
        variáveis, aceitá-lo como argumentos e retorná-los de funções
      </p>
      <p>{returnHello}</p>
      <h1>Componentes e Props</h1>
      <p>
        Componentes permitem você dividir a UI em partes independentes,
        reutilizáveis e pensar em cada parte isoladamente.
      </p>
      <h2>Renderizando um Componente</h2>
      <p>
        Quando o React vê um elemento representando um componente, ele passa
        atributos JSX e componentes filhos para esse componente como um único
        objeto. Nós chamamos esse objeto de “props”.
      </p>
      <Welcome name="Sara" />
      <h2>Extraindo Componentes</h2>
      <p>Não tenha medo de dividir componentes em componentes menores.</p>
      <p>
        Ele aceita author (um objeto), text (uma string) e date (uma data) como
        props
      </p>
      <p>
        Esse componente pode ser complicado de alterar. Também é difícil
        reutilizar suas partes individuais. Vamos extrair alguns componentes
        dele.
      </p>
      <p>Primeiro, nós vamos extrair Avatar:</p>
      <p>
        O Avatar não precisa saber que está sendo renderizado dentro do Comment.
        É por isso que nós demos ao seu prop um nome genérico: user em vez de
        author.
      </p>
      <p>
        Nós recomendamos nomear props a partir do ponto de vista do próprio
        componente ao invés do contexto em que ele está sendo usado.
      </p>
      <p>
        Extrair componentes pode parecer um trabalho pesado no começo, mas ter
        uma paleta de componentes reutilizáveis, compensa no futuro quando for
        trabalhar em aplicativos maiores. Uma boa regra é que se uma parte da
        sua UI for usada várias vezes, é uma boa candidata a ser extraída para
        um componente separado.
      </p>
      <h2>Props são Somente Leitura</h2>
      <p>
        Independente se você declarar um componente como uma função ou uma
        classe, ele nunca deve modificar seus próprios props
      </p>
      <p>
        As UIs de aplicativos são dinâmicas e mudam com o tempo. Na próxima
        seção, nós vamos introduzir um novo conceito de “state”. O state permite
        aos componentes React alterar sua saída ao longo do tempo em resposta a
        ações do usuário, respostas de rede e quaisquer outras coisas, sem
        violar essa regra.
      </p>
      <h1>Estado e Ciclo de Vida</h1>
      <p>
        Esta seção, aprenderemos como tornar o componente Clock verdadeiramente
        reutilizável e encapsulado. Ele irá configurar seu próprio temporizador
        e se atualizar a cada segundo.
      </p>
      <p>
        No entanto, falta um requisito crucial: o fato de que o Clock configura
        um temporizador e atualiza a UI a cada segundo deve ser um detalhe de
        implementação do Clock.
      </p>
      <p>
        Para implementá-lo, precisamos adicionar um “state” ao componente Clock.
      </p>
      <p>
        O state do componente é similar as props, mas é privado e totalmente
        controlado pelo componente.
      </p>
      <h2>Convertendo uma Função para uma Classe</h2>
      <p>
        Você pode converter um componente de função como Clock em uma classe em
        cinco etapas:
      </p>
      <ul>
        <li>
          Criar uma classe ES6, com o mesmo nome, estendendo React.component.
        </li>
        <li>Adicionar um único método vazio chamado render().</li>
        <li>Mova o corpo da função para o método render().</li>
        <li>Substitua props por this.props no corpo de render().</li>
        <li>Exclua a declaração da função vazia restante.</li>
      </ul>
      <h2>Adicionando Métodos de Ciclo de Vida a Classe</h2>
      <p>
        Em aplicações com muitos componentes, é muito importante limpar os
        recursos utilizados pelos componentes quando eles são destruídos.
      </p>
      <p>
        Quando a saída do Clock é inserida no DOM, o React chama o método do
        ciclo de vida componentDidMount(). Dentro dele, o componente Clock pede
        ao navegador para configurar um temporizador para chamar o método tick()
        do componente uma vez por segundo.
      </p>
      <p>
        A cada segundo o navegador chama o método tick(). Dentro dele, o
        componente Clock agenda uma atualização de UI chamando setState() com um
        objeto contendo a hora atual. Graças à chamada setState(), o método
        render() será diferente e, portanto, a saída de renderização incluirá a
        hora atualizada.
      </p>
      <p>
        Se o componente Clock for removido do DOM, o React chama o método do
        ciclo de vida componentWillUnmount() para que o temporizador seja
        interrompido.
      </p>
      <p>Resultado:</p>
      <Clock />
      <h2>Usando o State Corretamente</h2>
      <p>Existem três coisas que você deve saber sobre setState().</p>
      <span>Errado</span>
      <p>this.state.comment = 'Hello';</p>
      <p>Em vez disso, use setState():</p>
      <span>Correto</span>
      <p>{"this.setState({comment: 'Hello'});"}</p>
      <p>
        O único lugar onde você pode atribuir this.state é o{" "}
        <strong>construtor</strong> .
      </p>
      <h1>Manipulando eventos</h1>
      <p>
        Manipular eventos em elementos React é muito semelhante a manipular
        eventos em elementos do DOM. Existem algumas diferenças de sintaxe:
      </p>
      <li>
        Eventos em React são nomeados usando camelCase ao invés de letras
        minúsculas.
      </li>
      <li>
        Com o JSX você passa uma função como manipulador de eventos ao invés de
        um texto.
      </li>
      <p>Em HTML:</p>
      <p>{'<button onclick="activateLasers()">Ativar lasers</button>'}</p>
      <p>Em React:</p>
      <p>{"<button onClick={activateLasers}>Ativar lasers</button>"}</p>
      <p>
        Outra diferença é que você não pode retornar false para evitar o
        comportamento padrão no React. Você deve chamar preventDefault
        explícitamente. Por exemplo, com HTML simples, para evitar que um link
        abra uma nova página, você pode escrever:
      </p>
      <ActionLink />
      <p>
        Quando você define um componente usando uma classe do ES6, um padrão
        comum é que um manipulador de eventos seja um método na classe.
      </p>
      <Toggle />
      <p>
        Você precisa ter cuidado com o significado do this nos callbacks do JSX.
        Em JavaScript, os métodos de classe não são vinculados por padrão. Se
        você esquecer de fazer o bind de this.handleClick e passá-lo para um
        onClick, o this será undefined quando a função for realmente chamada.
      </p>
      <p>
        Este não é um comportamento específico do React. É uma parte de como
        funcionam as funções em JavaScript. Geralmente, se você referir a um
        método sem () depois dele, como onClick={"this.handleClick"}, você deve
        fazer o bind manual deste método.
      </p>
      <p>
        Se ficar chamando “bind” incomoda você, há duas maneiras de contornar
        isso. Se você estiver usando a sintaxe experimental de campos de classe
        pública, você pode usar campos de classe para vincular callbacks
        corretamente:
      </p>
      <LoggingButton />
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
        O componente irá renderizar o {"<LoginButton />"} ou{" "}
        {"<LogoutButton />"}
        dependendo do estado atual. Ele tambem irá renderizar {
          "<Greeting />"
        }{" "}
        do exemplo anterior:
      </p>
      <LoginControl />
      <p>
        Declarar uma variável e usar uma declaração condicional if é uma ótima
        maneira de renderizar um componente, mas às vezes você pode querer usar
        uma sintaxe mais curta. Existem algumas maneiras para utilizar condições
        inline em JSX, explicadas abaixo.
      </p>
      <h2>If inline com o Operador Lógico {"&&"}</h2>
      <p>
        Você pode incorporar expressão em JSX encapsulando em chaves. Isto
        inclui o operador lógico {"&&"} de JavaScript. Isto pode ser conveniente
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
        No exemplo abaixo, o {"<WarningBanner />"} é renderizado dependendo do
        valor da prop chamada warn. Se o valor da prop é false, o componente não
        é renderizado:
      </p>
      <Page />
      <h1>Listas e Chaves</h1>
      <p>
        Dado o código abaixo, nós usamos a função map() para receber um array de
        números e dobrar o valor de cada um deles. Atribuímos o novo array
        retornado pela função map() para a variável doubled e imprime no
        console:
      </p>
      <h2>Renderizando Múltiplos Componentes</h2>
      <p>
        Você pode criar coleções de elementos e adicioná-los no JSX usando
        chaves {}.
      </p>
      <p>
        Abaixo, iteramos pelo array numbers usando a função map() do JavaScript.
        Retornamos um elemento {"<li>"} para cada item. Finalmente, atribuímos o
        array de elementos resultante para listItems:
      </p>
      <ul>{listItemsArray}</ul>
      <h2>Componente de Lista Básico</h2>
      <p>Geralmente você irá renderizar listas dentro de um componente.</p>
      <p>
        Podemos refatorar o exemplo anterior em um componente que aceita um
        array de números e retorna uma lista de elementos.
      </p>
      <NumberList numbers={numbers} />
      <p>
        Ao executar esse código, você receberá um aviso que uma chave deve ser
        definida para os itens da lista. key é um atributo string especial que
        você precisa definir ao criar listas de elementos. Iremos analisar os
        motivos pelos quais isso é importante na próxima seção.
      </p>
      <p>
        Vamos atribuir uma key aos itens da nossa lista dentro de numbers.map()
        e resolver o valor da chave que está em falta.
      </p>
      <h2>Keys</h2>
      <p>
        As Keys ajudam o React a identificar quais itens sofreram alterações,
        foram adicionados ou removidos. As Keys devem ser atribuídas aos
        elementos dentro do array para dar uma identidade estável aos elementos:
      </p>
      <p>
        A melhor forma de escolher uma chave é usar uma string que identifica
        unicamente um item da lista dentre os demais. Na maioria das vezes você
        usaria IDs de seus dados como chave:
      </p>
      <h2>Extraindo Componentes com Chaves</h2>
      <p>
        As chaves apenas fazem sentido no contexto do array que está
        encapsulando os itens.
      </p>
      <p>
        Por exemplo, se você extrai um componente ListItem, você deve deixar a
        chave nos elementos {"<ListItem />"} ao invés de deixar no elemento{" "}
        {"<li>"} dentro de ListItem.
      </p>
      <p>
        Por via de regra, os elementos dentro de uma função map() devem
        especificar chaves.
      </p>
      <h2>Incluindo map() no JSX</h2>
      <p>
        O JSX permite incluir qualquer expressão dentro de chaves, então podemos
        adicionar o resultado do map() diretamente:
      </p>
      <p>
        Às vezes isso resulta em um código mais limpo. Mas esse padrão também
        pode ser confuso. Como em JavaScript, depende de você decidir se vale a
        pena extrair uma variável para aumentar a legibilidade. Lembre-se que se
        o corpo da função map() tiver muitos níveis, poderá ser um bom momento
        para extrair um componente.
      </p>
      <h1>Formulários</h1>
      <p>
        Os elementos de formulário HTML funcionam de maneira um pouco diferente
        de outros elementos DOM no React, porque os elementos de formulário
        mantêm naturalmente algum estado interno.
      </p>
      <h2>Componentes Controlados (Controlled Components)</h2>
      <p>
        Em HTML, elementos de formulário como {"<input>"}, {"<textarea>"} e
        {" <select>"} normalmente mantêm seu próprio estado e o atualiza baseado
        na entrada do usuário. Em React, o estado mutável é normalmente mantido
        na propriedade state dos componentes e atualizado apenas com setState().
      </p>
      <p>
        Podemos combinar os dois fazendo o estado React ser a “única fonte da
        verdade”. Assim, o componente React que renderiza um formulário também
        controla o que acontece nesse formulário nas entradas subsequentes do
        usuário. Um input cujo o valor é controlado pelo React dessa maneira é
        chamado de “componente controlado” (controlled component).
      </p>
      <NameForm />
    </div>
  );
};

export default mainConcepts;
