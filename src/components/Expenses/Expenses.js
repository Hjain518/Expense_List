import React, { useState } from 'react';
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
// import Card from "../UI/Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* hardcoding number of expenseitem will not do obviously, so we have to render the list dynamically*/}

      {/*  <ExpenseItem
        heading={props.items[0].title}
        amt={props.items[0].amount}
        date={props.items[0].date}>
      </ExpenseItem>

      <ExpenseItem
        heading={props.items[1].title}
        amt={props.items[1].amount}
        date={props.items[1].date}>
      </ExpenseItem>

      <ExpenseItem
        heading={props.items[2].title}
        amt={props.items[2].amount}
        date={props.items[2].date}>
      </ExpenseItem>

      <ExpenseItem
        heading={props.items[3].title}
        amt={props.items[3].amount}
        date={props.items[3].date}>
    </ExpenseItem>*/}
      {/*we put on curly braces to dynamically render any js code*/}

      {/*{expensesContent}*/}
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}
      />

    </div>
  );
}
export default Expenses;