import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  
  state = { count: this.props.value };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
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
