import React from 'react'
import '../css/ListItem.css'

const ListItem = function (props) {
    let statusClassName = 'list-item';
    if(props.completedStatus) {
        statusClassName = 'list-item completed';
    }
        return (
            <div className={statusClassName} todo-id={props.todoID}>
                <input className='check-box'type="checkbox" checked={props.checkedStatus} todo-action="select-item" onChange={props.handleCheckedStatusChange}/>
                <p className="todo-text" todo-action="todo-text">{props.todoText}</p>
                <button className="btn-done" todo-action="mark-done" onClick={props.handleCompletedStatusChange}>Done</button>
                <button className="btn-delete" todo-action="delete-item" onClick={props.deleteItem}>Delete</button>
            </div>
        );
}

export default ListItem;