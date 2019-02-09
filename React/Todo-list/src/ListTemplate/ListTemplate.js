import React from 'react';
const listTemplate = (props) => {
    let status = "list-item";

    if(props.status) {
        status = "list-item done-class"
    }

    if(props.ischecked) {
    return (
        <div className={status} todo-id={props.id}>
            <input type="checkbox" todo-type="check" className="check-box" onClick={props.checkBoxHandler} checked ></input>
            <p todo-type="text-holder">{props.text}</p>
            <button className="buttonClass-done"  todo-type="btn-done" onClick={props.buttonDoneHandler}>Done</button>
            <button className="buttonClass-x" todo-type = "btn-x" onClick={props.buttonXHandlerr}>X</button>
        </div>
        );
    }
    return (
        <div className={status} todo-id={props.id}>
            <input type="checkbox" todo-type="check" className="check-box" onClick={props.checkBoxHandler}></input>
            <p todo-type="text-holder">{props.text}</p>
            <button className="buttonClass-done"  todo-type="btn-done" onClick={props.buttonDoneHandler}>Done</button>
            <button className="buttonClass-x" todo-type = "btn-x" onClick={props.buttonXHandlerr}>X</button>
        </div>
        );
}

export default listTemplate;
