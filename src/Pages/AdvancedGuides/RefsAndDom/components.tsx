import React, { Component, createRef } from "react";

export class CustomTextInput extends Component {
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
          type='button'
          value={"Focus the text input"}
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

// Foca automaticamente em um elemento do HTML.
export class AutoFocusTextInput extends Component {
  private textInput = createRef<CustomTextInput>();

  componentDidMount() {
    this.textInput.current?.focusTextInput();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

// const CustomTextInputTwo = () => {
//   const textInput = React.createRef<HTMLInputElement>();

//   function handleClick() {
//     if (textInput.current) {
//       textInput.current.focus();
//     }
//   }

//   return (
//     <div>
//       <input type='text' ref={textInput} />
//       <input
//         type='button'
//         value={"Focus the text input"}
//         onClick={handleClick}
//       />
//     </div>
//   );
// };
