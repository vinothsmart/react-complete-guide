import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Jan 17th 2022</div>
      <div className="expense-item__descrption">
        <h2>Bike Insurance</h2>
        <div className="expense-item__price">Rs 1045</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
