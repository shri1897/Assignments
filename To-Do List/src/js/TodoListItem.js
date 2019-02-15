import { View } from './View.js'

function TodoListItem(todoID, todoText, todoStatus, todoChecked) {
    this.todoID = todoID;
    this.todoText = todoText;
    this.todoStatus = todoStatus === true ? true : false;
    this.todoChecked = todoChecked === true ? true : false;
}

TodoListItem.prototype = Object.create(View.prototype);
TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.init = function (listOfItemObjects, onListItemChange) {
    document.getElementById('list-container').onclick = (event) => {
        let todoID, itemWrapper;

        itemWrapper = findItemWrapper(event.target);
        todoID = parseInt(itemWrapper.getAttribute("todo-id"));
        switch (event.target.getAttribute("todo-type")) {
            case "check":
                {
                    listOfItemObjects.get(todoID).todoChecked = event.target.checked;
                    break;
                }
            case "btn-done":
                {
                    listOfItemObjects.get(todoID).todoStatus = true;
                    break;
                }
            case "btn-x":
                {
                    listOfItemObjects.delete(todoID);
                    break;
                }
        }
        onListItemChange();
        event.stopPropagation();
    };
};
TodoListItem.prototype.createItem = function (todoID, textValue, todoStatus, todoChecked) {
    let templateListItem = document.querySelector('.template-list-item'),
        newItem = templateListItem.cloneNode(true);

    newItem.querySelector(`[todo-type="text-holder"]`).textContent = textValue;
    newItem.classList.remove("template-list-item");
    newItem.setAttribute("todo-id", `${todoID}`);
    if (todoStatus) {
        newItem.classList.add('done-class');
    }
    newItem.querySelector(`[todo-type="check"]`).checked = todoChecked;
    return newItem;
};


const findItemWrapper = (element) => { //Find the closest parent wrapper of the passed element.
    while (element != document) {
        if (element.getAttribute('todo-id')) {
            return element;
        }
        element = element.parentElement;
    }
};

export { TodoListItem };


////////////////////////////////////////////CLASS////////////////////////////////////////////////////////////////

// class TodoListItem extends View {
//     constructor(todoID, todoText, todoStatus, todoChecked) {
//         super();
//         this.todoID = todoID;
//         this.todoText = todoText;
//         this.todoStatus = todoStatus === true ? true : false;
//         this.todoChecked = todoChecked === true ? true : false;
//     }

//     init(listOfItemObjects, onListItemChange) {
//         document.getElementById('list-container').onclick = (event) => {       
//             let todoID, itemWrapper;
//             itemWrapper = findItemWrapper(event.target);
//             todoID = parseInt(itemWrapper.getAttribute("todo-id"));
//             switch (event.target.getAttribute("todo-type")) {
//                 case "check":
//                     {
//                         listOfItemObjects.get(todoID).todoChecked = event.target.checked;
//                         break;
//                     }
//                 case "btn-done":
//                     {
//                         listOfItemObjects.get(todoID).todoStatus = true;
//                         break;
//                     }
//                 case "btn-x":
//                     {
//                         listOfItemObjects.delete(todoID);
//                         break;
//                     }
//             }
//             onListItemChange();
//             event.stopPropagation();
//         };
//     }

//     createItem(todoID, textValue,todoStatus, todoChecked) {
//         let templateListItem = document.querySelector('.template-list-item');
//         let newItem = templateListItem.cloneNode(true);
//         newItem.querySelector(`[todo-type="text-holder"]`).textContent = textValue;
//         newItem.classList.remove("template-list-item");
//         newItem.setAttribute("todo-id", `${todoID}`);
//         if (todoStatus) {
//             newItem.classList.add('done-class');
//         }
//         newItem.querySelector(`[todo-type="check"]`).checked = todoChecked;
//         return newItem;
//     }
// }