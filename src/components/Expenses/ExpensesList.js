import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import React from 'react';
const ExpensesList = props => {
  // let expensesContent=<p>No expenses found</p>;

  // since moved below code from expenses , we can replace filteredExpenses below with props.items or props.expenses or whatever
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No Expenses</h2>;
  }
  // if (props.items.length > 0) {

  //   expensesContent = props.items.map((expense) => (
  //     <ExpenseItem
  //       //we should add such a key when mapping out the list of items in react to allow react to uniquely identify all the items and be aware of not only how long the array is but also each item is placed where in the array to avoid updating the whole array whenever new item is added..
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  //moved upper code to below
  return <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        //we should add such a key when mapping out the list of items in react to allow react to uniquely identify all the items and be aware of not only how long the array is but also each item is placed where in the array to avoid updating the whole array whenever new item is added..
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};
export default ExpensesList;
