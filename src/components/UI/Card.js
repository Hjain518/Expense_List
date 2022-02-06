import './Card.css';
function Card(props) {
  // below line is written to support className with Card component in ExpenseItem as it is made by us , not default like div, hence it does not support className by default.
  const classes = 'card' + props.className;
  return <div className={classes}>{props.children} </div>;
}
export default Card;