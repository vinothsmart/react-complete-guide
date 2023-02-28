import React, { useCallback, useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = useCallback((e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  }, []);

  const formSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
      }
      onAddGoal(enteredValue);
    },
    [enteredValue, onAddGoal]
  );

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
