import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";

import ClickCounter from "./ClickCounter";
import ClickTracker from "./Clicktracker";
import InteractiveWelcome from "./InteractiveWelcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />

        <Counter value={0} increment={1} interval={1000} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
      </div>
    );
  }
}
export default App;
