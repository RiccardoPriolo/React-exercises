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
import { LanguageComponent } from "./LanguageContext";

import { isCompositeComponent } from "react-dom/test-utils";

class App extends React.Component {
  onLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <Container title="Learning React!">
        <LanguageComponent />
        <Hello />
        <Counter value={0} increment={1} interval={1000} />
        <ClickCounter />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <MyUncontrolledForm />
        <MyToDoList
          render={(items, handleDeleteItem) => {
            return items.map((items, index) => (
              <li key={index}>
                {items}
                <button onClick={handleDeleteItem}>Remove Item</button>
              </li>
            ));
          }}
        />
      </Container>
    );
  }
}
export default App;
