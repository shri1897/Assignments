(function toDoListInit() { 

    var selectedElementsArray = [],
        completedElementsArray = [],
        allElementsArray = [],
        listContainer = document.getElementById("list-container"), //Most reused element.
        hiddenItem = document.querySelector(".list-item"), //Used for creating new List element.
        textBox = document.getElementById("text-box"); //Used for creating new list element.

    textBox.addEventListener("keypress", function textBoxOnEnterKeyPressed(event) {
        if (event.keyCode === 13) { //Add item If enter key pressed
            addItem();
        }
    });

    document.getElementById('btn-add').addEventListener('click', function buttonAddOnClickListener(){
        addItem();
    }); 

    document.getElementById('btn-delete-selected').addEventListener('click', function deleteSelectedOnClick(event) { //delete all selected elements
        var i;
        for (i = 0; i < selectedElementsArray.length; i += 1) {
            removeElementFromArray(allElementsArray, selectedElementsArray[i]);
            selectedElementsArray[i].remove();
        }
        selectedElementsArray = [];
        storeArraysLocally();
    });

    document.getElementById('btn-delete-completed').addEventListener('click', function deleteCompletedOnClick(event) { // Delete all completed elements
        var i;
        for (i = 0; i < completedElementsArray.length; i += 1) {
            removeElementFromArray(allElementsArray, completedElementsArray[i]);
            completedElementsArray[i].remove();
        }
        completedElementsArray = [];
        storeArraysLocally();
    });

    document.getElementById('btn-select-all').addEventListener('click', function selectAllOnClick(event) { //Select-Deselect All
        var i, check_uncheck;
        check_uncheck = findCheckUncheck();
        for (i = 0; i < allElementsArray.length; i += 1) {
            markElementAsChecked(allElementsArray[i], check_uncheck);
        }
        storeArraysLocally();
    });

    listContainer.addEventListener("click", function listContainerOnClickListener(event) { //Using Event-bubbling to find the target.
        var index, parentDivElement;
        parentDivElement = event.target.parentElement;
        switch (event.target.getAttribute("data-name")) {

            case "check-box": //On-click -> refresh selected Array.
                {
                    index = selectedElementsArray.indexOf(parentDivElement);
                    if (event.target.checked) {
                        if (index === -1) {
                            selectedElementsArray.push(parentDivElement);
                        }
                    } else {
                        if (index > -1) {
                            selectedElementsArray.splice(index, 1);
                        }
                    }
                    break;
                }
            case "btn-done": //On-click -> add to completedArray and change style.
                {
                    markElementAsDone(parentDivElement);
                    break;
                }
            case "btn-x": //On-click -> remove element from all the arrays
                {
                    removeElementFromArray(allElementsArray, parentDivElement);
                    removeElementFromArray(selectedElementsArray, parentDivElement);
                    parentDivElement.remove();
                    break;
                }
        }
        storeArraysLocally();
        event.stopPropagation();
    });

    function addItem(text) { //Adding List Item using cloning and pushing Item to allElementsArray Array.
        var newItem, textvalue;
        textvalue = text || textBox.value;
        textBox.value = "";
        if (textvalue) {
            newItem = hiddenItem.cloneNode(true);
            newItem.querySelector(`[data-name="p"]`).textContent = textvalue;
            newItem.style.display = "flex";
            allElementsArray.push(newItem);
            listContainer.appendChild(newItem);
            storeArraysLocally();
        }
        return newItem;
    };

    function removeElementFromArray(arrayName, elementToRemove) { //Removing specified element from given array.
        var index;
        index = arrayName.indexOf(elementToRemove);
        if (index > -1) {
            arrayName.splice(index, 1);
        }
    };

    function findCheckUncheck() { //If any element is selected deselect all and return false. otherwise, select all and return true;
        if (selectedElementsArray.length > 0) {
            selectedElementsArray = [];
            return false;
        } else {
            selectedElementsArray = allElementsArray.slice();
            return true;
        }
    };

    function storeArraysLocally() { //Storing element's text, checked and completed value in localstorage.
        var i, text, checked, done;
        localStorage.setItem('listItemSize', allElementsArray.length);
        for (i = 0; i < allElementsArray.length; i += 1) {
            text = allElementsArray[i].querySelector(`[data-name="p"]`).textContent;
            checked = allElementsArray[i].querySelector(`[data-name="check-box"]`).checked;
            done = completedElementsArray.indexOf(allElementsArray[i]) === -1 ? false : true;
            localStorage.setItem(`textValue${i}`, text);
            localStorage.setItem(`checked${i}`, checked);
            localStorage.setItem(`done${i}`, done);
        }
    }

    function reloadFromLocalStorage() { //Reloading elements from local storage with checked and completed value.
        var i, listItemSize, textValue, done, checked, newItem;
        listItemSize = parseInt(localStorage.getItem(`listItemSize`));
        for (i = 0; i < listItemSize; i += 1) {
            textValue = localStorage.getItem(`textValue${i}`);
            checked = localStorage.getItem(`checked${i}`);
            done = localStorage.getItem(`done${i}`);
            newItem = addItem(textValue);
            if (done === "true") {
                markElementAsDone(newItem);
            }
            if (checked === "true") {
                markElementAsChecked(newItem, true);
            }
        }
        storeArraysLocally();
    }

    function markElementAsDone(divElement) { //Adds Done-class and pushes element to completed array.
        completedElementsArray.push(divElement);
        divElement.classList.add("done-class");
    }

    function markElementAsChecked(divElement, value) { // changes checked value to given value and pushed element to selected Array.
        divElement.querySelector(`[data-name="check-box"]`).checked = value;
        if (value) {
            selectedElementsArray.push(divElement);
        }
    }
    reloadFromLocalStorage();
}());