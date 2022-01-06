import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
};

export default Expenses;
