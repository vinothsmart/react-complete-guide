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
  });
  return (
    <div className="App">
      <h1>Hi i'm a React App</h1>
      <p>This is really working!</p>
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
