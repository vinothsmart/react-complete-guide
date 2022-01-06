import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <div className="expenses">
      {items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Expenses;
