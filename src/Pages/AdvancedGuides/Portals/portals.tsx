import React, { Component } from "react";
import ReactDOM from "react-dom";

const Outsider = () => ReactDOM.createPortal(<div>Oie</div>, document.body);

export class App extends Component {
  render = () => {
    return <Outsider />;
  };
}
