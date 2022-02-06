import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = props => {
  // in the below array , we have a bunch of obj since we expect every datapoint to be an object in the chart.js file as we are acessing  datapoint.value, .label...etc
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  //we need to get the list of expenses of every month to update the value above, so we will use from expenses.js
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();//starting at 0 => jan => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />
};
export default ExpensesChart;