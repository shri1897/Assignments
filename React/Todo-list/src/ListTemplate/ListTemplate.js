import React from 'react';
import classes from './ListTemplate.css'
const listTemplate = (props) => {
    let listClass = classes['list-item'];
    if(props.status) {
        listClass = classes['done-class'];
    }
    return (
        <div className={listClass} todo-id={props.id}>
            <input type="checkbox" todo-type="check" className={classes['check-box']} onClick={props.checkBoxHandler} onChange= {() =>{}}checked={props.isChecked}></input>
            <p todo-type="text-holder" className={classes.para}>{props.text}</p>
            <button className={classes['btn-done']}  todo-type="btn-done" onClick={props.buttonDoneHandler}>Done</button>
            <button className={classes['btn-x']} todo-type = "btn-x" onClick={props.buttonCloseHandler}>X</button>
        </div>
    );
}
export default listTemplate;