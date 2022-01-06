import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [compTitle, setCompTitle] = useState(title);

  const handleClick = () => {
    setCompTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{compTitle}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
