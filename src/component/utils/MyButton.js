import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext.js';

export default function MyButton({ actionType, children }) {
  const context = useContext(CounterContext);

  return (
    <button
      className="btn"
      onClick={() => context.dispatch({ type: actionType })}
    >
      {children}
    </button>
  );
}
