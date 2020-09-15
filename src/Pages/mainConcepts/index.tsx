import React from 'react';
import { isPropertySignature } from 'typescript';

import './style.css';

//===============================================
//Introduzindo JSX
//===============================================

interface UserProps {
  firstName: string;
  lastName: string;
}

//Incorporando Expressões em JSX
const name = 'Marcos Botene';
const element = <h3>{name}</h3>;

function formatName(user: UserProps) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Daniel',
  lastName: 'Araldi',
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

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <h3>It is {}.</h3>
      </div>
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
        <ol>
          Criar uma classe ES6, com o mesmo nome, estendendo React.component.
        </ol>
        <ol>Adicionar um único método vazio chamado render().</ol>
        <ol>Mova o corpo da função para o método render().</ol>
        <ol>Substitua props por this.props no corpo de render().</ol>
        <ol>Exclua a declaração da função vazia restante.</ol>
      </ul>
      <p>
        O método render será chamado toda vez que uma atualização acontecer, mas
        enquanto renderizarmos {'<Clock>'} no mesmo nó DOM, apenas uma única
        instância da classe Clock será usada. Isso nos permite usar recursos
        adicionais, como o estado local e os métodos de ciclo de vida.
      </p>
      <h2>Adicionando Estado Local a uma Classe</h2>
    </div>
  );
};

export default mainConcepts;
