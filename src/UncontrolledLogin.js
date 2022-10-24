import React from "react";

class MyUncontrolledForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled form</h3>

        <form onSubmit={this.handleFormSubmit}>
          <input name="username" autoFocus/>
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default MyUncontrolledForm;
