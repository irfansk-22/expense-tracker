import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import styles from  "./Expenses.module.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === Number(filteredYear)
  );

  return (
    <div>
      <Card className={styles["expenses"]}>
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={FilterChangeHandler}
        />
        <ExpensesList listItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
