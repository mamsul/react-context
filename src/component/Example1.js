import React, { Component } from "react";
import Counter from "./Counter.js";
import { CounterContext } from "../context/CounterContext.js";
import Layout from "./layout/Layout.js";

class Example1 extends Component {
  state = {
    count: 0,
  };

  dispatch = (action) => {
    switch (action.type) {
      case "ADD_COUNT":
        this.setState({
          count: this.state.count + 1,
        });
        break;
      case "MIN_COUNT":
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
        <Layout>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Counter add={this.handleAdd} min={this.handleMin} />
          </div>
        </Layout>
      </CounterContext.Provider>
    );
  }
}

export default Example1;
