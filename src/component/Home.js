import React, { Component } from 'react';
import Counter from './Counter.js';
import { CounterContext } from '../context/CounterContext.js';

class Home extends Component {
  state = {
    count: 0,
  };

  dispatch = (action) => {
    switch (action.type) {
      case 'ADD_COUNT':
        this.setState({
          count: this.state.count + 1,
        });
        break;
      case 'MIN_COUNT':
        this.setState({
          count: this.state.count - 1,
        });
        break;
    }
  };

  render() {
    return (
      <CounterContext.Provider
        value={{
          state: this.state,
          dispatch: this.dispatch,
        }}
      >
        <div>
          <h1>MENCOBA CONTEXT</h1>
          <hr />
          <Counter add={this.handleAdd} min={this.handleMin} />
        </div>
      </CounterContext.Provider>
    );
  }
}

export default Home;
