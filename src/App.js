import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";

import ClickCounter from "./ClickCounter";
import ClickTracker from "./Clicktracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import MyUncontrolledForm from "./UncontrolledLogin";
import MyToDoList from "./MyTodoList";
import { Container } from "./Container";

class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <Container>
        <Hello />

        <Counter value={0} increment={1} interval={1000} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <MyUncontrolledForm />
        <MyToDoList />
      </Container>
    );
  }
}
export default App;
