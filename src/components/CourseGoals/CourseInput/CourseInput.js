import React, { useCallback, useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (enteredValue.trim().length === 0) {
        return;
      }
      onAddGoal(enteredValue);
    },
    [enteredValue, onAddGoal]
  );

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
