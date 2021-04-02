import React, { Component  } from 'react';

class CounterButton extends Component  {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  // this will no longer be needed if we are extending
  // with PureComponent above!
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(state => {
      return {count: state.count + 1}
    })
  }

  render() {
    console.log('CounterButton')
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;