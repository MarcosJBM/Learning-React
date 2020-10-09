import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map((number) => number * 2);

const listItemsArray = doubled.map((number) => <li>{number}</li>);

function ListItem(props: { value: number }) {
  return <li>{props.value}</li>;
}

function NumberList(props: { numbers: number[] }) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

export default function ListsAndKeys() {
  return (
    <div>
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
        Retornamos um elemento {'<li>'} para cada item. Finalmente, atribuímos o
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
        chave nos elementos {'<ListItem />'} ao invés de deixar no elemento{' '}
        {'<li>'} dentro de ListItem.
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
    </div>
  );
}
