import { useCallback } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
