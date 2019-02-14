import {View} from './View.js'
import {TodoListItem} from './TodoListItem.js';
import {TodoActionBar} from './TodoActionBar.js';

class TodoManager extends View {
    constructor() {
        super();
        this.listOfItemObjects = new Map();
    }

    init() {
        this.todoListItem = new TodoListItem();
        this.todoActionBar = new TodoActionBar();
        this.todoActionBar.init(this.listOfItemObjects,this.addItem.bind(this), this.onListItemChange.bind(this));
        this.todoListItem.init(this.listOfItemObjects, this.onListItemChange.bind(this));
    }

    addItem(textValue) {
        let timeStamp = new Date().getTime();
        let newListItem = new TodoListItem(timeStamp, textValue);
        this.listOfItemObjects.set(timeStamp, newListItem);
        this.onListItemChange();
    }
    
    onListItemChange() {
        this.render();
    }

    render() {
        let newItem;
        let listContainer = document.getElementById('list-container');
        listContainer.innerHTML = "";

        this.listOfItemObjects.forEach((value, key) => {
            newItem = this.todoListItem.createItem(value.todoID, value.todoText, value.todoStatus, value.todoChecked);
            listContainer.appendChild(newItem);
        });
        console.log([...this.listOfItemObjects.values()]);
    }
}

export {TodoManager};