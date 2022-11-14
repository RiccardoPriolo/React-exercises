import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";

import ClickCounter from "./ClickCounter";
import ClickTracker from "./Clicktracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import MyUncontrolledForm from "./UncontrolledLogin";
import MyToDoList from "./MyTodoList";
import { Sum } from "./Sum";
import { GitHubUser } from "./GitHubUser";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />

        <Counter value={0} increment={1} interval={1000} />
        <ClickCounter
          onCounterChange={(count) => {
            return console.log("The count is " + count);
          }}
        />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <MyUncontrolledForm />
        <MyToDoList />
        <Sum />
        <GitHubUser />
      </div>
    );
  }
}
export default App;
