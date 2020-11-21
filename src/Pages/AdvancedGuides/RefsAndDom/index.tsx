import React from "react";

import { CustomTextInput, AutoFocusTextInput } from "./components";

export default function RefsAndDom() {
  return (
    <div>
      <h1>Refs e o Dom</h1>
      <p>
        Refs fornecem uma forma de acessar os nós do DOM ou elementos React
        criados no método render.
      </p>
      <h2>Quando Usar Refs</h2>
      <ul>
        <li>
          Gerenciamento de foco, seleção de texto, ou reprodução de mídia.
        </li>
        <li>Engatilhar animações imperativas.</li>
        <li>Integração com bibliotecas DOM de terceiros.</li>
      </ul>
      <h2>Criando Refs</h2>
      <p>
        Refs são criadas usando React.createRef() e anexadas aos elementos React
        por meio do atributo ref. As Refs são comumente atribuídas a uma
        propriedade de instância quando um componente é construído para que
        então elas possam ser referenciadas por todo o componente.
      </p>
      <h2>Acessando Refs</h2>
      <p>
        Quando uma ref é passada para um elemento no render, uma referência para
        o nó se torna acessível no atributo current da ref.
      </p>
      <p>O valor da ref difere dependendo do tipo do nó:</p>
      <ul>
        <li>
          Quando o atributo ref é usado em um elemento HTML, a ref criada no
          construtor React.createRef() recebe um elemento DOM subjacente como a
          propriedade current.
        </li>
        <li>
          Quando o atributo ref é usado em um componente de classe, o objeto ref
          recebe uma instância montada de um componente em sua propriedade
          current.
        </li>
        <li>
          Você não pode usar o atributo ref em um componente funcional, já que
          eles não possuem instâncias.
        </li>
      </ul>
      <h3>Adicionando uma Ref a um Elemento DOM</h3>
      <CustomTextInput />
      <p>
        O React irá atribuir a propriedade current ao elemento DOM quando o
        componente for montado, e atribuirá null de volta quando ele for
        desmontado.
      </p>
      <h3>Adicionando uma Ref a um Componente de Classe</h3>
      <p>
        Se nós quisermos envolver o CustomTextInput acima para para simulá-lo
        sendo clicado imediatamente após a montagem, nós poderiamos usar uma ref
        para obter acesso ao input customizado e chamar o seu método
        focusTextInput manualmente.
      </p>
      <AutoFocusTextInput />
      <p>
        Note que isso só funciona se o CustomTextInput é declarado como uma
        Classe:
      </p>
    </div>
  );
}
