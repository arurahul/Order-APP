import classes from './.module.css';

const Input = props => {
  return <div className={classes.card}><label htmlFor={props.input.id}>{props.lable}</label>
  <input {...props.input}/>
  </div>
};

export default Input;