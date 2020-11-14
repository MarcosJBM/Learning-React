import React, { Component } from "react";

import { MouseState, CatProps, MouseProps } from "./type";

class Cat extends Component<CatProps> {
  render() {
    const seta =
      "https://i.pinimg.com/originals/95/3d/6c/953d6c0a8026ae79e81a689692428c6f.png";
    const { mouse } = this.props;
    return (
      <img
        src={seta}
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          height: 20,
          width: 20,
        }}
      />
    );
  }
}

class Mouse extends Component<MouseProps, MouseState> {
  constructor(props: MouseProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove(event: React.MouseEvent) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "20vh" }} onMouseMove={this.handleMouseMove}>
        <p>
          A posição atual do mouse é: {this.state.x}, {this.state.y}
          {this.props.children(this.state)}
        </p>
      </div>
    );
  }
}

const MouseTracker = () => (
  <div>
    <h1>Mova o mouse por aí</h1>
    <Mouse>{mouse => <Cat mouse={mouse} />}</Mouse>
  </div>
);

export default function RenderProps() {
  return (
    <div>
      <h1>Render Props</h1>
      <p>
        O termo “render prop” se refere a uma técnica de compartilhar código
        entre componentes React passando uma prop cujo valor é uma função.
      </p>
      <p>
        Um componente com uma render prop recebe uma função que retorna um
        elemento React e a invoca no momento de renderização, não sendo
        necessário para o componente implementar uma lógica própria.
      </p>
      <h2>Uso de Render Props para Características Transversais</h2>
      <p>
        Componentes são as principais unidades de reuso de código em React, mas
        nem sempre é fácil compartilhar o estado ou comportamento que um
        componente encapsula para outros componentes utilizarem esses valores.
      </p>
      <fieldset>
        <MouseTracker />
      </fieldset>
      <p>
        A questão é: Como podemos reutilizar esse comportamento em outro
        componente? Em outras palavras, se outro componente precisar saber a
        posição do cursor, podemos encapsular esse comportamento de forma que
        seja fácil compartilhá-lo com outros componentes?
      </p>
      <p>
        Lembrando que componentes são a unidade básica de reuso de código em
        React, vamos tentar refatorar esse código para usar o componente{" "}
        {"<Mouse>"}, ele encapsula o comportamento que precisamos reutilizar.
      </p>

      <p>
        Por exemplo, suponha que temos o componente {"<Cat>"} que renderiza a
        image de um gato seguindo o mouse na tela. Poderíamos usar uma prop{" "}
        {"<Cat mouse={{ x, y }}>"} que passaria as coordenadas do mouse para o
        componente de forma que este saberia onde posicionar a imagem na tela.
      </p>
      <p>
        Essa abordagem funciona para o nosso caso em específico, mas ainda não
        atingimos o objetivo de encapsular o comportamento de uma maneira
        completamente reutilizável. Agora, toda vez que precisarmos da posição
        do mouse para outro caso, teremos que criar um novo componente (ou seja,
        outro {"<MouseWithCat>"}) que renderiza algo especificamente para esse
        caso.
      </p>
      <p>
        Aqui é onde a render prop se encaixa: Ao invés de escrever um componente{" "}
        {"<Cat>"} dentro de {"<Mouse>"}, e mudar diretamente a saída
        renderizada, podemos passar uma função como prop para {"<Mouse>"}, que
        vai chamá-la para determinar o que renderizar dinamicamente- essa é a
        render prop.
      </p>

      <p>
        Agora, no lugar de clonar o componente {"<Mouse>"} e escrever o método
        render para resolver um caso específico, nós passamos uma render prop
        que {"<Mouse>"} pode usar para determinar o que ele renderiza
        dinamicamente.
      </p>
      <p>
        Portanto, uma render prop é uma função passada nas props que um
        componente utiliza para determinar o que renderizar.
      </p>
      <p>
        Essa técnica torna o comportamento que precisamos compartilhar
        extremamente portátil. Para acessar esse comportamento, basta renderizar
        um {"<Mouse>"} com uma render prop que dirá o que renderizar com o (x,
        y) atual do cursor.
      </p>
    </div>
  );
}
