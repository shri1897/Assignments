import React from 'react'
import ListItem from './ListItem'
import '../css/ListContainer.css'

const ListContainer = function (props) {
    let todoItems = props.todoItems;

    let listItems = todoItems.map((item) => {
        return (
            < ListItem 
                key={item.todoID}
                todoID={item.todoID}
                todoText={item.todoText}
                checkedStatus={item.checkedStatus}
                completedStatus={item.completedStatus}
                deleteItem={props.deleteItem}
                handleCheckedStatusChange={props.handleCheckedStatusChange}
                handleCompletedStatusChange={props.handleCompletedStatusChange}
            />
        );
    });

        return (
            <div className="list-container">
                {listItems}
            </div>
        );
}

export default ListContainer;