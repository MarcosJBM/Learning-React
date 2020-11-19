import React from "react";

interface ClockProps {
  date: Date;
  timerID: number;
  tick: () => Date;
}

export class Clock extends React.Component<{}, ClockProps> {
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
      timerID: 0,
      tick: () => new Date(),
    };
  }

  componentDidMount(this: ClockProps) {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(this: ClockProps) {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h3>Hello, world!</h3>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}
