import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
