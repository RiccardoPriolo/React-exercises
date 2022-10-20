import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  handleInputChande = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Form</h1>

        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChande}
        />
        <Welcome name={this.state.username} age={25} />
      </div>
    );
  }
}

export default InteractiveWelcome;
