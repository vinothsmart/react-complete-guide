import { useCallback } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = ({ onChangeFilter, selected }) => {
  const handleFilter = useCallback(
    (e) => {
      onChangeFilter(e.target.value);
    },
    [onChangeFilter]
  );
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleFilter} value={selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
