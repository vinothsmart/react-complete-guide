import React from "react";

const person = (props) => {
  return (
    <p>
      I'm a {props.name}! and I am {props.age} Years Old!
      <p>{props.children}</p>
    </p>
  );
};

export default person;
