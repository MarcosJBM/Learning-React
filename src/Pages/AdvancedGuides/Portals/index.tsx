import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

interface State {
  click: number;
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export class Modal extends React.Component {
  el: HTMLElement = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Parent extends React.Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = {
      click: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      click: state.click + 1,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Número de cliques: {this.state.click}</p>
        <p>
          Abra o DevTools do navegador para observar que o botão não é um filho
          da div com o onClick.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  return (
    <div className="modal">
      <button>Clicar</button>
    </div>
  );
}

export default function Portals() {
  return (
    <div>
      <h1>Portals</h1>
      <div id="app-root"></div>
      <div id="modal-root"></div>
      <Parent />
    </div>
  );
}
