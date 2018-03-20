import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, asyncIncrement } from './action'

const Counter = (props) => {
  console.log(props)
  return (
    <section>
      {props.value}
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.asyncIncrement}>+</button>
    </section>
  );
}

class App extends Component {
  render() {
   return (
      <Counter
        value={this.props.value}
        onIncrement={this.props.increment}
        asyncIncrement = {this.props.asyncIncrement}
        />
    )
  }
}
const mapStateToProps = (state) => {
  return {value: state}
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    asyncIncrement: () => dispatch(asyncIncrement())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)