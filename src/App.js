import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./Clicktracker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome age={25} />
        <Counter value={0} increment={1} interval={1000} />
        <ClickCounter />
        <ClickTracker />
      </div>
    );
  }
}
export default App;
