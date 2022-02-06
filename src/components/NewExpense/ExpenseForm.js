import React, { useState } from "react";

import './ExpenseForm.css';
//using props for the onSaveExpenseData created in newExpense.js
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // we can go for one state instead of 3 states by passing an object as a value
  // however the method above is preferred usually

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
  const titleChangeHandler = (event) => {
    //event.target.value is used to update to current inputed value continuously.
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //it takes an object , pulls out all key value pairs and adds them to  the new object.
    //   //we do this to ensure other values (enteredAmount , enteredDate) arent thrown away while updating.
    //   enteredTitle: event.target.value,
    //   //in this case we are depending on the prevState.
    //   //but we should do it like below when we depend on the prev state as react schedules state update and doesnt perform them instantly, hence we could depend on outdated states
    //   //so using below method , we gurantee react always give us the latest snapshot.
    // });

    //       setUserInput((prevState)=> {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();// to prevent refreshing the page after clicking the submit button, built into JS.
    const expenseData={
      title: enteredTitle,
      //as entered amount is string, so converting it to number.
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
    //doing below to reset after clicking on submit
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
   };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* adding value prop below to change/reset input text to blank after clicking submit button, known as 2 way binding*/}
          {/*onChange event listener is added to react to changed input*/}
          <input type='text' value={enteredTitle}  onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler}>
          </input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form >
  );
};
export default ExpenseForm;
