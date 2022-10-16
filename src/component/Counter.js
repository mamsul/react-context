import React, { useContext } from 'react';
import './../style.css';
import { CounterContext } from '../context/CounterContext.js';
import MyButton from './utils/MyButton.js';

const Counter = () => {
  const context = useContext(CounterContext);

  return (
    <div>
      <h3>Counter</h3>
      <div className="box">
        <MyButton actionType="MIN_COUNT">-</MyButton>
        <p>{context.state.count}</p>
        <MyButton actionType="ADD_COUNT">+</MyButton>
      </div>
    </div>
  );
};

export default Counter;
