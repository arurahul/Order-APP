import classes from './Input.module.css';

const Input = props => {
  return <div className={classes.card}><label className={classes.input['label']} htmlFor={props.input.id}>{props.label}</label>
  <input {...props.input}/>
  </div>
};

export default Input;