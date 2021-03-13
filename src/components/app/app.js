import React, { Component } from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    searchText: '',
    donePressed: false,
    activePressed: false
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      visible: true,
      id: this.maxId++
    };
  }

  deleteItem = (id) => {

    this.setState(({ todoData }) => {

      const idx = todoData.findIndex(item => item.id === id);

      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr,
      };

    });

  };

  addItem = (text) => {

    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {

      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });

    this.onSearch(this.state.searchText);
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(item => item.id === id);

    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = id => {
    this.setState(({todoData}) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };

    });
  };

  onToggleImportant = id => {
    this.setState(({todoData}) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };

    });
  };

  onSearch = (text) => {

    this.setState(({todoData}) => {

      const newArr = todoData.map(obj => {
        let visible = false;

        if (~obj.label.indexOf(text)) {
          visible = true;
        }

        return {
          ...obj,
          visible
        };

      });

      return {
        todoData: newArr,
        searchText: text
      };

    });

  };

  onFilterActive = () => {
    this.setState(({activePressed}) => {
      return {
        activePressed: true,
        donePressed: false
      };
    });
  };

  onFilterAll = () => {
    this.setState((state) => {
      return {
        activePressed: false,
        donePressed: false
      };
    });
  };

  onFilterDone = () => {
    this.setState((state) => {
      return {
        donePressed: true,
        activePressed: false
      };
    });
  };

  render() {

    const { todoData, activePressed, donePressed } = this.state;

    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">

        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex justify-content-between">
          <SearchPanel
            onSearch={this.onSearch} />
          <ItemStatusFilter
            onFilterActive={this.onFilterActive}
            onFilterAll={this.onFilterAll}
            onFilterDone={this.onFilterDone}
            donePressed={donePressed}
            activePressed={activePressed}/>
        </div>

        <TodoList
          todos={ todoData }
          isActivePressed={ activePressed }
          isDonePressed={ donePressed }
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm onItemAdded={this.addItem} />

      </div>
    );
  }

}