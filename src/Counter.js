import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: this.props.value };

    setInterval(() => {
      this.setState(function (state, props) {
        return {
          count: state.count + props.increment,
        };
      });
    }, this.props.interval);
  }

  render() {
    return (
      <>
        <CounterDisplay count={this.state.count} />
      </>
    );
  }
}

export default Counter;
