import React from "react";

import { NameForm, EssayForm, FlavorForm } from "./components";

export default function Forms() {
  return (
    <div>
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
      <p>
        Como o atributo value é definido no nosso {'<input type="text">'}, o
        valor exibido sempre será o mesmo de this.state.value, fazendo com que o
        estado do React seja a fonte da verdade. Como o handleChange é executado
        a cada tecla pressionada para atualizar o estado do React, o valor
        exibido será atualizado conforme o usuário digita.
      </p>
      <p>
        Com um componente controlado, o valor da entrada é sempre direcionado
        pelo estado React. Embora isso signifique que você precisa digitar um
        pouco mais de código, agora também pode passar o valor para outros
        elementos da interface do usuário ou redefini-lo de outros manipuladores
        de eventos.
      </p>
      <h2>Tag textarea</h2>
      <p>
        Em React, em vez disso, o {"<textarea>"} usa um atributo value. Desta
        forma, um formulário usando um {"<textarea>"} pode ser escrito de forma
        muito semelhante a um formulário que usa um input de linha única:
      </p>
      <EssayForm />
      <h2>Tag select</h2>
      <p>
        Em HTML,{" <select>"} cria uma lista suspensa (drop-down). Por exemplo,
        esse HTML cria uma lista suspensa de sabores:
      </p>
      <p>
        Note que a opção “coco” é selecionada por padrão, por causa do atributo
        selected. Em React, em vez de usar este atributo selected, usa-se um
        atributo value na raiz da tag select. Isso é mais conveniente em um
        componente controlado, porque você só precisa atualizá-lo em um só
        lugar.
      </p>
      <FlavorForm />
      <p>
        No geral, isso faz com que as tags {'<input type="text">'},{" "}
        {"<textarea>"} e {"<select>"} funcionem de forma muito semelhante -
        todos eles aceitam um atributo value que você pode usar para implementar
        um componente controlado.
      </p>
      <p>
        <strong>
          Você pode passar um array para o atributo value, permitindo que você
          selecione várias opções em uma tag select:
        </strong>
      </p>
      <h2>Tag de entrada de arquivo</h2>
      <p>
        Em HTML, o {'<input type="file">'} permite ao usuário escolher um ou
        mais arquivos de seu dispositivo para serem enviados para um servidor ou
        manipulados por JavaScript através da File API.
      </p>
      <p>
        Como seu valor é de somente leitura, ele é um componente não controlado
        do React.
      </p>
    </div>
  );
}
