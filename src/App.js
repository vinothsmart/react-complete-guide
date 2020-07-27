import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi i'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Vinoth" age="30" />
      <Person name="Ajitha" age="29">
        My Hobbies : Learning New Things
      </Person>
      <Person name="Vignesh" age="28" />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this works now?")
  // );
}

export default App;
