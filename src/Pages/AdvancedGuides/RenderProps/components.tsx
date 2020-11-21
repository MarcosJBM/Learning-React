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

export const MouseTracker = () => (
  <div>
    <h1>Mova o mouse por aí</h1>
    <Mouse>{mouse => <Cat mouse={mouse} />}</Mouse>
  </div>
);
