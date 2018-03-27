import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onTextChange } from '../action'
import { filter } from '../reducers/filter';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  
    this.onTextChange = this.onTextChange.bind(this);
  }

  render() {
    return (
      <section className="Filter">
        <span>Filter: </span>
        <input type="text" value={this.props.filter} onChange={this.onTextChange} />
      </section>
    )
  }

  onTextChange(e) {
    console.log('text')
    this.props.filterChanged(e.target.value);
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChanged: (filter) => dispatch({type: 'FILTER_CHANGED', filter})
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo);