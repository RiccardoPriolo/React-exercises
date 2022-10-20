import React from "react";

class ClickCounter extends React.Component {
  state = { count: 0 };

  CounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <button onClick={this.CounterIncrement}>
        Increment: {this.state.count}
      </button>
    );
  }
}

export default ClickCounter;
