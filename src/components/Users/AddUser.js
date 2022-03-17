import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [values, setValues] = useState({
    username: "",
    age: "",
  });

  const addUserHandler = (e) => {
    e.preventDefault();
    if (values.username.trim().length === 0 && values.age.trim().length === 0) {
      return;
    }
    if (+values.age < 1) {
      return;
    }
    onAddUser(values.username, values.age);
    setValues({
      username: "",
      age: "",
    });
  };

  const inputChangeHandler = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={inputChangeHandler}
          value={values.username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={inputChangeHandler}
          value={values.age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
