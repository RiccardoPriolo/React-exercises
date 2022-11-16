import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Hello from "./Hello";

import ClickCounter from "./ClickCounter";
import ClickTracker from "./Clicktracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import MyUncontrolledForm from "./UncontrolledLogin";
import MyToDoList from "./MyTodoList";
import { Sum } from "./Sum";

import GitHubUserList from "./GitHubUserList";
import CustomCounter from "./useCounter";
import { CustomLogin } from "./useForm";
import CarDetails from "./CarDetails";

import { LanguageComponent } from "./LanguageContext";
import { FilteredList } from "./FilteredList";
import Welcome from "./Welcome";
import { ShowGithubUser } from "./ShowGitHubUser";



class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="Riccardo" />} />
          <Route
            path="/Counter"
            element={<Counter value={0} increment={1} interval={1000} />}
          />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>

        <Hello />
        <LanguageComponent />

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
        <GitHubUserList />
        <CustomCounter />
        <CustomLogin />
        <CarDetails
          initialData={{ model: "BMW 120D", year: "2022", color: "Grey" }}
        />
        <FilteredList />
      </div>
    );
  }
}
export default App;
