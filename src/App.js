import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_expenses = [
  { id: 'e1', title: 'Car Insurance', amount: 999.99, date: new Date(2022, 2, 20) },
  { id: 'e2', title: 'Bike Insurance', amount: 99.99, date: new Date(2021, 3, 20) },
  { id: 'e3', title: 'Plane Insurance', amount: 1500.99, date: new Date(2021, 4, 20) },
  { id: 'e4', title: 'Cycle Insurance', amount: 29.99, date: new Date(2021, 5, 20) },
  //we need to pass data generating in expenseform.js to here..as it makes more sense.
  //there we need to connect to newExpense component as it uses the expense form.
];
function App() {
  const [expenses,setExpenses]= useState(dummy_expenses);
  //doing this for props

//using this to pass data fromm form to app.js
//below funstion is triggered when a new expense is added


  const addExpenseHandler = expense => {
     setExpenses(prevExpenses=>{
       return [expense,...prevExpenses];
     });
    //not doing below tarika instead doing above tarika since it is a clean way of updating states using older snapshot of that same state.

   // setExpenses([expense, ...expenses]);

    // console.log('In pp.js');
    // console.log(expense);
  };
  return (
    <div>
      {/* starting with on usually means it is a funtion pointer passed as a argument*/}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
