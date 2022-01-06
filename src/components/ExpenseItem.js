import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 0, 17);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "Rs. 3200";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__descrption">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
