import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            incrementCount: function(){
            this.setState({
                count: this.state.count + 1
            });
            },
            decrementCount: function(){
            this.setState({
                count: this.state.count - 1
            });
            },
            getInitialState: function(){
            return {
                count: 0
            }
            },
            render: function(){
            return (
                <div className="counter">
                <h1>{this.state.count}</h1>
                <button className="btn" onClick={this.incrementCount}>Increment</button>
                <button className="btn" onClick={this.decrementCount}>Decrement</button>
                </div>
      );
    }
  }
}; 
  

  
export default Counter;