import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";

import ClickCounter from "./ClickCounter";
import ClickTracker from "./Clicktracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import MyUncontrolledForm from "./UncontrolledLogin";


class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <div>
        <Hello />

        <Counter value={0} increment={1} interval={1000} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <MyUncontrolledForm />
      </div>
    );
  }
}
export default App;
