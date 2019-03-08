import React from 'react'
import PropTypes from 'prop-types';
import styles from '../css/TodoListItem.module.css'

const propTypes = {
    todoID: PropTypes.number.isRequired,
    todoText: PropTypes.string.isRequired,
    checkedStatus: PropTypes.bool.isRequired,
    completedStatus: PropTypes.bool.isRequired,
    deleteItem: PropTypes.func.isRequired,
    handleCheckedStatusChange: PropTypes.func.isRequired,
    handleCompletedStatusChange: PropTypes.func.isRequired
}

const defaultProps = {
    checkedStatus: false,
    completedStatus: false
}

function TodoListItem(props) {
    let classes = [styles['list-item']];
    if (props.completedStatus) {
        classes.push(styles['completed']);
    }
    return (
        <div className={classes.join(' ')} todo-id={props.todoID}>
            <input
                type="checkbox"
                className={styles["check-box"]}
                checked={props.checkedStatus}
                todo-action="select-item"
                onChange={props.handleCheckedStatusChange}
            />
            <p
                className={styles["todo-text"]}
                todo-action="todo-text">
                {props.todoText}
            </p>
            <button
                className={styles["btn-done"]}
                todo-action="mark-done"
                onClick={props.handleCompletedStatusChange}>
                Done
            </button>
            <button
                className={styles["btn-delete"]}
                todo-action="delete-item"
                onClick={props.deleteItem}>
                Delete
            </button>
        </div>
    );
}

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;

export default TodoListItem;