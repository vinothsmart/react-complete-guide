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

  const [otheState, setOtherState] = useState("Some Other Value");

  const [showPersons, setShowPersons] = useState(false);

  // console.log(state, otheState);

  const switchNameHandler = (newName) => {
    // console.log("Was Clicked!");
    // Don't do this not working state.persons[0].name = "Kanna";
    setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Ajitha", age: 29 },
        { name: "Vignesh", age: 45 },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setState({
      persons: [
        { name: "Kanna", age: 30 },
        { name: event.target.value, age: 29 },
        { name: "Vignesh", age: 45 },
      ],
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  };

  let persons = null;

  if (showPersons === true) {
    persons = (
      <div>
        <Person name={state.persons[0].name} age={state.persons[0].age} />
        <Person
          name={state.persons[1].name}
          age={state.persons[1].age}
          click={switchNameHandler.bind(this, "Mol")}
          changed={nameChangeHandler}
        >
          My Hobbies : Learning New Things
        </Person>
        <Person name={state.persons[2].name} age={state.persons[2].age} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi i'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this works now?")
  // );
}

export default App;
