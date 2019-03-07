import React from 'react'
import '../css/TodoActionBar.css'

const TodoActionBar = function(props) {
        function addItemOnEnterKeyPress(event) {
            if(event.which === 13) {
                props.addItem();
            }
        } 

        return (
            <div className="action-bar">
                <input className="text-box" type="text" placeholder="Write something to add" value={props.textValue} onChange={props.handleInputTextChange} onKeyPress={addItemOnEnterKeyPress}/>
                <button className="btn-add" onClick={props.addItem}>Add</button>
                <button className="btn-select-all" onClick={props.selectDeselectAll}>Select/Deselect All</button>
                <button className="btn-delete-selected" onClick={props.deleteSelected}>Delete Selected</button>
                <button className="btn-delete-completed" onClick={props.deleteCompleted}>Delete Completed</button>
            </div>
        );
}

export default TodoActionBar;