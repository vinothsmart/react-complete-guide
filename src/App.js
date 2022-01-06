import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
      date: new Date(2021, 0, 17),
    },
    {
      id: "e3",
      title: "Mobile Insurance",
      amount: "Rs. 545",
      date: new Date(2021, 0, 17),
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
