import React, { Component, createRef } from "react";

type Props = {};

class MyComponent extends Component {
  private myRef = React.createRef<HTMLDivElement>();
  render() {
    return <div ref={this.myRef}></div>;
  }
}

// Adicionando uma Ref a um Elemento DOM
class CustomTextInput extends Component {
  private textInput = React.createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current?.focus();
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.textInput} />
        <input
          type='text'
          value={"Focus the text input"}
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends Component {
  private textInput = createRef<CustomTextInput>();

  componentDidMount() {
    this.textInput.current?.focusTextInput();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

const CustomTextInputTwo = (props: Props) => {
  const textInput = React.createRef<HTMLInputElement>();

  function handleClick() {
    if (textInput.current) {
      textInput.current.focus;
    }
  }

  return (
    <div>
      <input type='text' ref={textInput} />
      <input
        type='button'
        value={"Focus the text input"}
        onClick={handleClick}
      />
    </div>
  );
};

export default function RefsAndDom() {
  return (
    <div>
      <h1>Refs e o Dom</h1>
    </div>
  );
}
