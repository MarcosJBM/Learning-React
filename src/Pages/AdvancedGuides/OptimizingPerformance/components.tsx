import React from "react";

export class CounterButton extends React.Component<{}, { count: number }> {
  constructor(props: { count: number }) {
    super(props);
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextState: { count: number }) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>Abacates: {this.state.count}</button>
    );
  }
}
