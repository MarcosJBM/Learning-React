import React, { Component } from "react";

import { MouseTrackerProps } from "./type";

class MouseTracker extends Component<{}, MouseTrackerProps> {
  constructor(props: MouseTrackerProps) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event: React.MouseEvent) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        <h1></h1>
        <p></p>
      </div>
    );
  }
}

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
      <MouseTracker />
    </div>
  );
}
