import { useState, useCallback } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ handleAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpense = useCallback(
    (expense) => {
      const newExpense = {
        ...expense,
        id: Math.random().toString(),
      };
      handleAddExpense(newExpense);
      setIsEditing(false);
    },
    [handleAddExpense]
  );

  const UpadteExpense = useCallback(() => {
    setIsEditing(true);
  }, []);

  const cancelExpense = useCallback(() => {
    setIsEditing(false);
  }, []);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={UpadteExpense}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm onSave={saveExpense} onCancel={cancelExpense} />
      )}
    </div>
  );
};

export default NewExpense;
