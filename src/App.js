import React, { useState } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

function App() {
  const [state, setState] = useState({
    persons: [
      { id: "asddsa", name: "Vinoth", age: 30 },
      { id: "asddsa2", name: "Ajitha", age: 29 },
      { id: "asddsa3", name: "Vignesh", age: 28 },
    ],
  });

  const [otherState, setOtherState] = useState("Some Other Value");

  const [showPersons, setShowPersons] = useState(false);

  // console.log(state, otherState);

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

  const nameChangeHandler = (event, id) => {
    const personIndex = state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...state.persons];
    persons[personIndex] = person;

    setState({
      persons: persons,
    });

    // setState({
    //   persons: [
    //     { name: "Kanna", age: 30 },
    //     { name: event.target.value, age: 29 },
    //     { name: "Vignesh", age: 45 },
    //   ],
    // });
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  };

  const deletePersonsHandler = (personsIndex) => {
    // In Earlier we used slice method
    // const persons = state.persons.slice();

    // This is Es6 feature using the spread operator
    const persons = [...state.persons];
    persons.splice(personsIndex, 1);
    setState({ persons: persons });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

  let persons = null;

  if (showPersons === true) {
    persons = (
      <div>
        {state.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
        {/* <Person name={state.persons[0].name} age={state.persons[0].age} />
        <Person
          name={state.persons[1].name}
          age={state.persons[1].age}
          click={switchNameHandler.bind(this, "Mol")}
          changed={nameChangeHandler}
        >
          My Hobbies : Learning New Things
        </Person>
        <Person name={state.persons[2].name} age={state.persons[2].age} /> */}
      </div>
    );
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "salmon",
      color: "black",
    };
  }

  // let classes = ["red", "bold"].join(" ");
  const classes = [];
  if (state.persons.length <= 2) {
    classes.push("red"); // classes = ['red']
  }

  if (state.persons.length <= 1) {
    classes.push("bold"); // classes = ['red', 'bold']
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi i'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    </StyleRoot>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this works now?")
  // );
}

export default Radium(App);
