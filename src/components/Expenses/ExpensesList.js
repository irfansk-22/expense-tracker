import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ listItems }) => {
  if (listItems.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {listItems.map((lItem) => (
        <ExpenseItem
          key={lItem.id}
          title={lItem.title}
          amount={lItem.amount}
          date={lItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
