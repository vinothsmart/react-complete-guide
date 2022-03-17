import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [values, setValues] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (values.username.trim().length === 0 && values.age.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Username and age are required!",
      });
      return;
    }
    if (values.age < 1) {
      setError({
        title: "Invalid age!",
        message: "Age must be a positive number!",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </>
  );
};

export default AddUser;
