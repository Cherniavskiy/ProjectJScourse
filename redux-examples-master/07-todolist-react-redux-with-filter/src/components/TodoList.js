import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onTextChange } from '../action'
import Todo from './Todo';

class TodoList extends Component {

  render() {
    const list = this.props.todos
      .filter(todo => todo.text.includes(this.props.filter))
      .map(todo =>
        <Todo
          store={this.props.store} 
          key={todo.id}
          todo={todo}
        />
      );
    return (
      <section className="TodoList">
        {list}
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos, 
    filter: state.filter
  }
}
export default connect(mapStateToProps)(TodoList);