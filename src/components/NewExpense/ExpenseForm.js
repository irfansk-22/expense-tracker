import { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formActive, setFormActive] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    activeStateHandler(e);
  };

  const activeStateHandler = (e) => {
    e.preventDefault();
    setFormActive((prevActiveState) => !prevActiveState);
  };

  return (
    <div>
      {formActive === false && (
        <button onClick={activeStateHandler}>Add Expense</button>
      )}
      {formActive === true && (
        <form onSubmit={submitHandler}>
          <div className={styles["new-expense__controls"]}>
            <div className={styles["new-expense__control"]}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                required
              />
            </div>
            <div className={styles["new-expense__control"]}>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
                required
              />
            </div>
            <div className={styles["new-expense__control"]}>
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
                required
              />
            </div>
          </div>
          <div className={styles["new-expense__actions"]}>
            <button onClick={activeStateHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
