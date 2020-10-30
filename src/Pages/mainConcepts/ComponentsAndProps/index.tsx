import React from "react";

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

function Welcome(props: { name: string }) {
  return <h3>Hello, {props.name}</h3>;
}

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
  return <img className="Avatar" src={props.user.avatarURL} alt={props.user.name} />;
}

function UserInfo(props: AvatarProps) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">{props.user.name}</div>
    </div>
  );
}

export default function ComponentsAndProps() {
  return (
    <div>
      <h1>Componentes e Props</h1>
      <p>
        Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte
        isoladamente.
      </p>
      <h2>Renderizando um Componente</h2>
      <p>
        Quando o React vê um elemento representando um componente, ele passa atributos JSX e componentes
        filhos para esse componente como um único objeto. Nós chamamos esse objeto de “props”.
      </p>
      <Welcome name="Sara" />
      <h2>Extraindo Componentes</h2>
      <p>Não tenha medo de dividir componentes em componentes menores.</p>
      <p>Ele aceita author (um objeto), text (uma string) e date (uma data) como props</p>
      <p>
        Esse componente pode ser complicado de alterar. Também é difícil reutilizar suas partes individuais.
        Vamos extrair alguns componentes dele.
      </p>
      <p>Primeiro, nós vamos extrair Avatar:</p>
      <p>
        O Avatar não precisa saber que está sendo renderizado dentro do Comment. É por isso que nós demos ao
        seu prop um nome genérico: user em vez de author.
      </p>
      <p>
        Nós recomendamos nomear props a partir do ponto de vista do próprio componente ao invés do contexto em
        que ele está sendo usado.
      </p>
      <p>
        Extrair componentes pode parecer um trabalho pesado no começo, mas ter uma paleta de componentes
        reutilizáveis, compensa no futuro quando for trabalhar em aplicativos maiores. Uma boa regra é que se
        uma parte da sua UI for usada várias vezes, é uma boa candidata a ser extraída para um componente
        separado.
      </p>
      <h2>Props são Somente Leitura</h2>
      <p>
        Independente se você declarar um componente como uma função ou uma classe, ele nunca deve modificar
        seus próprios props
      </p>
      <p>
        As UIs de aplicativos são dinâmicas e mudam com o tempo. Na próxima seção, nós vamos introduzir um
        novo conceito de “state”. O state permite aos componentes React alterar sua saída ao longo do tempo em
        resposta a ações do usuário, respostas de rede e quaisquer outras coisas, sem violar essa regra.
      </p>
    </div>
  );
}
