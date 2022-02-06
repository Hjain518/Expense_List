import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
  //we have an array of objects , so we have to first convert this array of objects to array of numbers, we transform datapoint obj to datapoint number, to finally use it to max function below
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return <div className="chart">
    {/*datapoints prop is expected to hold a value which is aray , hence map is used , chart bar component is used so that we can have as many chart bar components as we have datapoints, instead of just hardcoding no of char bar to be 12*/}
    {props.dataPoints.map((dataPoint) => (
      <ChartBar
        // since mapping , we need a key as it helps react render the list items efficiently, instead of id we use label here as it is also unique.
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        // label of jan, feb....
        label={dataPoint.label}
      />
    ))}
  </div>
};
export default Chart;