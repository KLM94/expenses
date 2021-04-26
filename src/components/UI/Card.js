import "../UI/Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
//props.children is the content between opening and closing element
//children is already set in React. No need to set it explicitly

export default Card;
