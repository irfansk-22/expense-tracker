import styles from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
