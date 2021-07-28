import React from 'react';
import './Counter.css';

function Counter({ value, id, removeValue, addValue }) {
  return (
    <div className="counter">
      <b className="counter-value">{value}</b>
      <div className="counter-buttonContainer">
        <button className="counter-buttonRemove btn" onClick={() => removeValue(id, value)}>-</button>
        <button className="counter-buttonAdd btn" onClick={() => addValue(id, value)}>+</button>
      </div>
    </div>
  );
}

export default Counter;