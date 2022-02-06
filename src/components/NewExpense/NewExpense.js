import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
//using props for the on AddExpense created in app.js
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    //console.log(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
    {/*if is editing is not true return only the button of add new expense */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/*creating a prop for expenseform*/
    /* this below is super imp. method thru which we can pass data from child component i.e ExpenseForm.js to parent component which is NewExpense.js*/}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;