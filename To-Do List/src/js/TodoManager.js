import { View } from './View.js'
import { TodoListItem } from './TodoListItem.js';
import { TodoActionBar } from './TodoActionBar.js';

function TodoManager() {
    this.listOfItemObjects = new Map();
}

TodoManager.prototype = Object.create(View.prototype);
TodoManager.prototype.constructor = TodoManager;

TodoManager.prototype.init = function () {
    this.todoListItem = new TodoListItem();
    this.todoActionBar = new TodoActionBar();
    this.todoActionBar.init(this.listOfItemObjects, this.addItem.bind(this), this.onListItemChange.bind(this));
    this.todoListItem.init(this.listOfItemObjects, this.onListItemChange.bind(this));
};

TodoManager.prototype.addItem = function (textValue) {
    let timeStamp = new Date().getTime(),
        newListItem = new TodoListItem(timeStamp, textValue);
        
    this.listOfItemObjects.set(timeStamp, newListItem);
    this.onListItemChange();
};

TodoManager.prototype.onListItemChange = function (textValue) {
    this.render();
};

TodoManager.prototype.render = function () {
    let newItem,
        listContainer = document.getElementById('list-container'),
        listContainerFrag = document.createDocumentFragment();

    listContainer.innerHTML = "";

    this.listOfItemObjects.forEach((value, key) => {
        newItem = this.todoListItem.createItem(value.todoID, value.todoText, value.todoStatus, value.todoChecked);
        listContainerFrag.appendChild(newItem);
    });
    listContainer.appendChild(listContainerFrag);
    console.log([...this.listOfItemObjects.values()]);
};

export { TodoManager };



////////////////////////////////////////////CLASS////////////////////////////////////////////////////////////////
// class TodoManager extends View {
//     constructor() {
//         super();
//         this.listOfItemObjects = new Map();
//     }

//     init() {
//         this.todoListItem = new TodoListItem();
//         this.todoActionBar = new TodoActionBar();
//         this.todoActionBar.init(this.listOfItemObjects,this.addItem.bind(this), this.onListItemChange.bind(this));
//         this.todoListItem.init(this.listOfItemObjects, this.onListItemChange.bind(this));
//     }

//     addItem(textValue) {
//         let timeStamp = new Date().getTime();
//         let newListItem = new TodoListItem(timeStamp, textValue);
//         this.listOfItemObjects.set(timeStamp, newListItem);
//         this.onListItemChange();
//     }

//     onListItemChange() {
//         this.render();
//     }

//     render() {
//         let newItem;
//         let listContainer = document.getElementById('list-container');
//         listContainer.innerHTML = "";

//         this.listOfItemObjects.forEach((value, key) => {
//             newItem = this.todoListItem.createItem(value.todoID, value.todoText, value.todoStatus, value.todoChecked);
//             listContainer.appendChild(newItem);
//         });
//         console.log([...this.listOfItemObjects.values()]);
//     }
// }