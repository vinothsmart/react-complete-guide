import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi i'm a React App</h1>
      <p>This is really working!</p>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this works now?")
  // );
}

export default App;
