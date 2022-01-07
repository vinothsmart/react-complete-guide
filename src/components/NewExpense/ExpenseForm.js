import { useCallback, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSave, onCancel }) => {
  const [values, setValues] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    // this is destructing apporach
    // setValues({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // });

    // this is callback approach best approach
    setValues((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const expensesData = {
        title: values.title,
        amount: +values.amount,
        date: new Date(values.date),
      };
      onSave(expensesData);
      setValues({
        title: "",
        amount: "",
        date: "",
      });
    },
    [values, onSave]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={handleChange}
            value={values.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            value={values.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
