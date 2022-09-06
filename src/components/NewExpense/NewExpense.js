import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: String(Math.random()),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className={styles['new-expense']}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
