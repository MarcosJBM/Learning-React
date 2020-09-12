import React from 'react';

//===============================================
//Introduzindo JSX
//===============================================

interface UserProps {
  firstName: string;
  lastName: string;
}

const mainConcepts = () => {
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
    </div>
  );
};

export default mainConcepts;
