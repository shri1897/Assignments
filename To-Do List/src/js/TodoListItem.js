import { View } from './View.js';

function TodoListItem(todoID, todoText, todoStatus, todoChecked) {
    this.todoID = todoID;
    this.todoText = todoText;
    this.todoStatus = todoStatus === true ? true : false;
    this.todoChecked = todoChecked === true ? true : false;
}

TodoListItem.prototype = Object.create(View.prototype);
TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.init = function (todoManager) {

    todoManager.listContainer.onclick = (event) => {
        listContainerClickHandler(event, todoManager);
    }
};

const listContainerClickHandler = (event, todoManager) => {
    try {
        let itemWrapper = findItemWrapper(event.target, 'todo-id'),
            todoID = parseInt(itemWrapper.getAttribute("todo-id")),
            clickedListItem = todoManager.todoList.items.find(item => item.todoID === todoID);

        switch (event.target.getAttribute("todo-action")) {
            case "select-item":
                {
                    clickedListItem.todoChecked = event.target.checked;
                    render(clickedListItem, itemWrapper);
                    break;
                }
            case "mark-done":
                {
                    clickedListItem.todoStatus = true;
                    render(clickedListItem, itemWrapper);
                    break;
                }
            case "delete-item":
                {
                    let index = todoManager.todoList.items.indexOf(clickedListItem);
                    todoManager.deleteItem('delete-index', index);
                    break;
                }
        }
    } catch(error) {
        console.log(error.message);
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

const render = (todoListItem, todoListElement) => {
    if (todoListItem.todoStatus) {
        todoListElement.classList.add('done');
    }
};

export { TodoListItem };