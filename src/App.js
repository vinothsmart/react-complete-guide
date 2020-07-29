import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [state, setState] = useState({
    persons: [
      { name: "Vinoth", age: 30 },
      { name: "Ajitha", age: 29 },
      { name: "Vignesh", age: 28 },
    ],
    otherState: "Some Other Value",
  });

  const switchNameHandler = () => {
    // console.log("Was Clicked!");
    // Don't do this not working state.persons[0].name = "Kanna";
    setState({
      persons: [
        { name: "Kanna", age: 30 },
        { name: "Ajitha", age: 29 },
        { name: "Vignesh", age: 45 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi i'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>
        My Hobbies : Learning New Things
      </Person>
      <Person name={state.persons[2].name} age={state.persons[2].age} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this works now?")
  // );
}

export default App;
