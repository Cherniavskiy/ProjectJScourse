import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filter from './components/Filter';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Filter />
        <AddTodo />
        <TodoList />
      </section>
    )
  }
}

export default App;