import React from "react";

class ClickTracker extends React.Component {
  state = { btn: "" };

  clickTrack = (event) => {
    this.setState(() => {
      return { btn: event.target.innerText };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.clickTrack}>First Button</button>
        <button onClick={this.clickTrack}>Second Button</button>
        <button onClick={this.clickTrack}>Third Button</button>

        <h1>Show Event: {this.state.btn} </h1>
      </>
    );
  }
}

export default ClickTracker;
