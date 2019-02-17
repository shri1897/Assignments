import { View } from './View.js'

function TodoListItem(todoID, todoText, todoStatus, todoChecked) {
    this.todoID = todoID;
    this.todoText = todoText;
    this.todoStatus = todoStatus === true ? true : false;
    this.todoChecked = todoChecked === true ? true : false;
}

TodoListItem.prototype = Object.create(View.prototype);
TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.init = function (todoManagerProps) {

    todoManagerProps.listContainer.onclick = (event) => {
        listContainerClickHandler(event, todoManagerProps);
    }
};

const listContainerClickHandler = (event, todoManagerProps) => {
    let itemWrapper = findItemWrapper(event.target, 'todo-id'),
        todoID = parseInt(itemWrapper.getAttribute("todo-id")),
        clickedListItem = todoManagerProps.todoList.items.find(item => item.todoID === todoID);

    switch (event.target.getAttribute("todo-action")) {
        case "select-item":
            {
                clickedListItem.todoChecked = event.target.checked;
                todoManagerProps.onTodoListChange();
                break;
            }
        case "mark-done":
            {
                clickedListItem.todoStatus = true;
                todoManagerProps.onTodoListChange();
                break;
            }
        case "delete-item":
            {
                let index = todoManagerProps.todoList.items.indexOf(clickedListItem);
                todoManagerProps.deleteItem('delete-index', index)
                break;
            }
    }
    event.stopPropagation();
};

const findItemWrapper = (element, attributeName) => { //returns the closest parent element of the passed element with given Attribute
    while (element != null) {
        if (element.getAttribute(attributeName)) {
            return element;
        }
        element = element.parentElement;
    }
    throw new Error(`Parent element with ${attributeName} not found!`);

};

export { TodoListItem };
