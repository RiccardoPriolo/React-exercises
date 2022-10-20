import React from "react";

class Login extends React.Component {
  state = { username: "", password: "", chechbox: "" };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

 

  render() {
    return (
      <>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          type="checkbox"
          name="checkbox"
          value={this.state.checked}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          name="login"
          onClick={() => {
            this.props.onLogin(this.state);
          }}
          disabled={!this.state.username || this.state.password === ""}
        >
          login
        </button>
      </>
    );
  }
}
export default Login;
