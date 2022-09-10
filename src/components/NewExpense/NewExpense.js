import { useState, useCallback } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpense = useCallback(
    (expense) => {
      const newExpense = {
        ...expense,
        id: Math.random().toString(),
      };
      onAddExpense(newExpense);
      setIsEditing(false);
    },
    [onAddExpense]
  );

  const upadteExpense = useCallback(() => {
    setIsEditing(true);
  }, []);

  const cancelExpense = useCallback(() => {
    setIsEditing(false);
  }, []);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={upadteExpense}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm onSave={saveExpense} onCancel={cancelExpense} />
      )}
    </div>
  );
};

export default NewExpense;
