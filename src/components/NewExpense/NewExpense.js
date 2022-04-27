import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ handleAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    handleAddExpense(newExpense);
    setIsEditing(false);
  };

  const handleEditExpense = () => {
    setIsEditing(true);
  };

  const handleCancelExpense = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleEditExpense}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm onSave={saveExpense} onCancel={handleCancelExpense} />
      )}
    </div>
  );
};

export default NewExpense;
