import React, { Component } from 'react';
import './App.css';
import ListTemplate from './ListTemplate/ListTemplate.js';

class App extends Component {

  state = {
    listOfObjects: JSON.parse(localStorage.getItem("com.react.todolist"))
  }

  saveToLocalStorage = (object) => {
    localStorage.setItem("com.react.todolist", JSON.stringify(object));
  }

  addItem = () => {
    let textBox = document.getElementById("text-box");
    if(textBox.value) {
      let newObject = this.state.listOfObjects;
      let newElement =  {id: newObject.length, text: textBox.value , status: false, checked: false};
      newObject.push(newElement);
      this.saveToLocalStorage();
      console.table(newObject);
      this.setState({listOfObjects: newObject});
      localStorage.setItem("com.react.todolist", JSON.stringify(newObject));
      textBox.value = "";
    }
  }

  addButtonHandler = () => {
    this.addItem();
  }

  textBoxOnEnterKeyHandler = (event) => {
    if(event.which === 13 ) {
      this.addItem();
    }
  }

  deleteCompletedButtonHandler = () => {
    let newObject = this.state.listOfObjects.filter( (el) => {
      if(!el.status) {
        return true;
      }
    });
    this.setState({listOfObjects: newObject});
    this.saveToLocalStorage(newObject);
  }

  deleteSelectedButtonHandler = () => {
    let newObject = this.state.listOfObjects.filter( (el) => {
      if(!el.checked) {
        return true;
      }
    });
    this.setState({listOfObjects: newObject});
    this.saveToLocalStorage(newObject);
  }

  selectAllButtonHandler = () => {
    let newCheckValue = true;
    if(this.state.listOfObjects[0] && this.state.listOfObjects[0].checked) {
      newCheckValue = false;
    }
    let newObject = [];
    this.state.listOfObjects.map( (el) => {
      el.checked = newCheckValue;
      newObject.push(el);
      return true;
    });
    this.setState({listOfObjects: newObject});
    this.saveToLocalStorage(newObject);
  }

  buttonXHandler = (event) => {
    let id = event.target.parentElement.getAttribute('todo-id');
    this.state.listOfObjects.splice(id, 1);
    this.setState(this.state);
    this.saveToLocalStorage(this.state.listOfObjects);
  }

  buttonDoneHandler = (event) => {
    let id = event.target.parentElement.getAttribute('todo-id');
    this.state.listOfObjects[id].status = true;
    this.setState(this.state);
    this.saveToLocalStorage(this.state.listOfObjects);
  }

  checkBoxHandler = (event) => {
    let id = event.target.parentElement.getAttribute('todo-id');
    let newChecked = event.target.checked;
    this.state.listOfObjects[id].checked = newChecked;
    this.setState(this.state);
    this.saveToLocalStorage(this.state.listOfObjects);
  }

  render() {
    let listOfItems = this.state.listOfObjects[0] ? this.state.listOfObjects.map(el => {
      return <ListTemplate 
              key={this.state.listOfObjects.indexOf(el)}
              id={this.state.listOfObjects.indexOf(el)} 
              text={el.text} 
              status={el.status} 
              ischecked={el.checked}
              checkBoxHandler={this.checkBoxHandler.bind(this)}
              buttonDoneHandler={this.buttonDoneHandler.bind(this)}
              buttonXHandlerr={this.buttonXHandler}></ListTemplate>
    }) : null;
    return (
      <div className="App">

        <div id="text-input">
            <input type="text" id="text-box" placeholder="Write something to add" onKeyPress={this.textBoxOnEnterKeyHandler}></input>
            <button id="btn-add" className="input-button" onClick={this.addButtonHandler}>Add</button>
            <button id="btn-select-all" className="input-button" onClick={this.selectAllButtonHandler}>Select/Deselect All</button>
            <button id="btn-delete-selected" className="input-button" onClick={this.deleteSelectedButtonHandler}>Delete Selected</button>
            <button id="btn-delete-completed" className="input-button" onClick={this.deleteCompletedButtonHandler}>Delete Completed</button>
        </div>

        <div id="list-container">
            {listOfItems}
        </div>
      </div>
    );
  }
}

export default App;

