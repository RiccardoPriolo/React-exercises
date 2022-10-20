import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: this.props.value };

    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
      });
    }, this.props.interval);
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default Counter;
