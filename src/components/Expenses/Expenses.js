import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const handleFilterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredItems = items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={handleFilterChange}
          selected={filterYear}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
