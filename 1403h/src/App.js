import React, {Component} from 'react';


const Counter = (props) => {
  return (
    <section>
      <div onClick={props.onIncrement.bind(this, 0)}>{props.value[0]}</div>
      <div onClick={props.onIncrement.bind(this, 1)}>{props.value[1]}</div>
      <div onClick={props.onIncrement.bind(this, 2)}>{props.value[2]}</div>
      <div onClick={props.onIncrement.bind(this, 3)}>{props.value[3]}</div>
    </section>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);

    props.store.subscribe(() => {
      this.setState({ value: props.store.getState() });
    });
  }

  render() {
    return (
      <Counter
        value={this.props.store.getState()}
        onIncrement={i => this.props.store.dispatch({ type: "INCREMENT", i })}
      />
    );
  }
}