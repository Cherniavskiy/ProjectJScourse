import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    this.onToogle = this.onToogle.bind(this);
  }


  render() {
    const todo = this.props;
    return (
      <section className="Todo">
        <p>{todo.text}</p>
        <p className={todo.done ? 'Todo-completed' : 'Todo-uncompleted'} onClick={ this.onToogle}>
          {todo.done ? 'Completed' : 'Uncompleted'}
        </p>
        <button onClick={this.onRemove}>remove</button>
      </section>
    );
  }

  onToogle() {
    this.props.store.dispatch({ type: 'TOOGLE_TODO', id: this.props.todo.id });
  }

  onRemove() {
    this.props.store.dispatch({ type: 'REMOVE_TODO', id: this.props.todo.id });
  }
}

export default Todo;