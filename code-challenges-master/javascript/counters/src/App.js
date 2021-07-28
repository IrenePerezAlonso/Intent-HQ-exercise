import React, { useState } from "react";
import './App.css';

function Counter(props) {
  const { value } = props;
  const [count, setCounter] = useState(value);
  
  const removeValue = counter => setCounter(counter - 1);
  const addValue = counter => setCounter(counter + 1);

  return (
    <div className="counter">
      <b className="counter-value">{count}</b>
      <div className="counter-buttonContainer">
        <button className="counter-buttonRemove btn" onClick={() => removeValue(count)}>-</button>
        <button className="counter-buttonAdd btn" onClick={() => addValue(count)}>+</button>
      </div>
    </div>
  );
}

function App() {
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];
  const isolatedValue = { id: 4, value: 0 };

  return (
    <div className="app">
      {data.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
        ))}
      <Counter key={isolatedValue.id} value={isolatedValue.value} />
      <div className="separator" />
    </div>
  );
}

export default App;
