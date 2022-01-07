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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={handleFilterChange}
          selected={filterYear}
        />
        {filteredItems.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
