import { useCallback, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [values, setValues] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    // setValues({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // });
    setValues((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const expensesData = {
        title: values.title,
        amount: values.amount,
        date: new Date(values.date),
      };
      console.log(expensesData);
    },
    [values]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={handleChange}
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
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
