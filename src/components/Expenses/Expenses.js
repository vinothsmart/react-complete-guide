import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const handleFilterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredItems = items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((item) => (
      <ExpenseItem key={item.id} {...item} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={handleFilterChange}
          selected={filterYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
