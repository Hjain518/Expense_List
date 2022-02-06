import "./ExpenseItem.css";
import React from "react";

//import Card from './Card.js';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // anything can be wriiten insted of props but it is the convention
  // const expenseDate = new Date(2021, 2, 28)
  // const expenseTitle = 'Car Insurance'
  // const expenseAmt = 199.50
  // no need for above since using props to avoid hardcoding
  //only 1 parameter is needed for passing data into functions instead of all paramters
  //that 1 parameter is props

  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  // const year = props.date.getFullYear();

  //useState function by default returns an array with first value as origiinal and second element new updated one.

  // const [heading,setHeading]= useState(props.heading);

  // const clickHandler=()=>{
  //   setHeading("Updated!"); 
  //   //calling setHEading doesnt change the value right away , instead scheduls it , hence console log does not immediately after updating.
  //   console.log(heading);
  // };

  return (
    // having content bbetween closing and opening card component only works if we put props.children in card.js...otherwise it only workd for default html attributes like <h1> or <div>
    //card is not working properly so switching back to div 
    <li>
      <div className="expense-item">

        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>

        </div>
      </div>
    </li>
    //after using props , we can get all the itme we need from outside this component unlike before like(const expenseDate = new Date(2021, 2, 28))
  );
}
export default ExpenseItem;
