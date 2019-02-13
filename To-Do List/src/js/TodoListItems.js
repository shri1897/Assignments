import { View } from './View.js'

class TodoListItems extends View {
    constructor(todoID, todoText, todoStatus, todoChecked) {
        super();
        this.todoID = todoID;
        this.todoText = todoText;
        this.todoStatus = todoStatus === true ? true : false;
        this.todoChecked = todoChecked === true ? true : false;
    }

    init(listOfItemObjects, renderCallBack) {
        document.getElementById("list-container").addEventListener("click", (event) => { //Using Event-bubbling to find the target.
            let todoID, clickedListItem;
            clickedListItem = event.target.parentElement;
            todoID = parseInt(clickedListItem.getAttribute("todo-id"));
            switch (event.target.getAttribute("todo-type")) {
                case "check":
                    {
                        listOfItemObjects.get(todoID).setChecked(event.target.checked);
                        break;
                    }
                case "btn-done":
                    {
                        listOfItemObjects.get(todoID).setStatus(true);
                        break;
                    }
                case "btn-x":
                    {
                        listOfItemObjects.delete(todoID);
                        break;
                    }
            }
            renderCallBack(listOfItemObjects);
            event.stopPropagation();
        });
    }

    setStatus(status) {
        this.todoStatus = status;
    };

    setChecked(value) {
        this.todoChecked = value;
    };

    setText(newText) {
        this.todoText = newText;
    }
}
export { TodoListItems };