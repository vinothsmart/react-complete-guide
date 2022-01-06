import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ handleAddExpense }) => {
  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    handleAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpense} />
    </div>
  );
};

export default NewExpense;
