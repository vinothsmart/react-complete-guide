import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INTIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "Rs. 3200",
    date: new Date(2021, 0, 17),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: "Rs. 1045",
    date: new Date(2021, 2, 17),
  },
  {
    id: "e3",
    title: "Mobile Insurance",
    amount: "Rs. 545",
    date: new Date(2021, 11, 17),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense handleAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
