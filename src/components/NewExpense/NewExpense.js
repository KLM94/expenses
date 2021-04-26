import "./NewExpense.css";
import "../NewExpense/ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const addExpenseHandler = () => {
    setShowForm(true);
  };

  const cancelAddExpense = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelButton={cancelAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
