import React from 'react';
import '../css/TodoManager.css'
import TodoActionBar from './TodoActionBar'
import ListContainer from './ListContainer'

class TodoManager extends React.Component {

    state = {
        todoItems: [],
        todoInputTextValue: ''
    };

    addItem = () => {
        let todoItems = this.state.todoItems.slice();
        let todoText = this.state.todoInputTextValue;
        if (todoText) {
            let todoID = new Date().getTime();
            todoItems.push({ todoID: todoID, todoText: todoText, checkedStatus: false, completedStatus: false });
            this.setState({ todoItems: todoItems, todoInputTextValue: '' });
        }
    }

    deleteItem = (event) => {
        let todoItems = this.state.todoItems.slice();
        let itemID = parseInt(event.target.closest('.list-item').getAttribute('todo-id'));
        todoItems = todoItems.filter(item => {
            return item.todoID !==  itemID;
        });
        this.setState({todoItems: todoItems})
    }

    selectDeselectAll = () => {
        let todoItems = this.state.todoItems.slice();
        if (todoItems[0]) {
            let check = !todoItems[0].checkedStatus;
            todoItems.map((item)=>{
                item.checkedStatus = check;
                return true;
            });
            this.setState({todoItems:todoItems})
        }
    }

    deleteSelected = () => {
        let todoItems = this.state.todoItems.slice();
        todoItems = todoItems.filter((item) => {
            return !item.checkedStatus;
        });
        this.setState({ todoItems: todoItems });
    }

    deleteCompleted = () => {
        let todoItems = this.state.todoItems.slice();
        todoItems = todoItems.filter((item) => {
            return !item.completedStatus;
        });
        this.setState({ todoItems: todoItems });
    }

    handleInputTextChange = (event) => {
        this.setState({ todoInputTextValue: event.target.value });
    }

    handleCheckedStatusChange = (event) => {
        let todoItems = this.state.todoItems.slice();
        let itemID = parseInt(event.target.closest('.list-item').getAttribute('todo-id'));
        todoItems.map(item => {
            if(item.todoID ===  itemID) {
                item.checkedStatus = event.target.checked;
            }
            return true;
        });
        this.setState({todoItems: todoItems})
    }

    handleCompletedStatusChange = (event) => {
        let todoItems = this.state.todoItems.slice();
        let itemID = parseInt(event.target.closest('.list-item').getAttribute('todo-id'));
        todoItems.map(item => {
            if(item.todoID ===  itemID) {
                item.completedStatus = !item.completedStatus;
            }
            return true;
        });
        this.setState({todoItems: todoItems})
    }

    render() {
        return (
            <div className='todo-manager'>
                < TodoActionBar
                    textValue={this.state.todoInputTextValue}
                    handleInputTextChange={this.handleInputTextChange}
                    addItem={this.addItem}
                    deleteSelected={this.deleteSelected}
                    deleteCompleted={this.deleteCompleted}
                    selectDeselectAll={this.selectDeselectAll}
                />
                < ListContainer
                    todoItems={this.state.todoItems}
                    deleteItem={this.deleteItem}
                    handleCheckedStatusChange={this.handleCheckedStatusChange}
                    handleCompletedStatusChange={this.handleCompletedStatusChange}
                />
            </div>
        );
    }
}

export default TodoManager;