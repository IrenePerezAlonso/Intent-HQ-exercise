import React, { useState } from "react";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

function Counter(props) {

  const { value } = props;
  const [count, setCounter] = useState(value);
  
  return (
    <div>
      <b>{count}</b>
      <div>
        <button onClick={() => setCounter(count - 1)}>-</button>
        <button onClick={() => setCounter(count + 1)}>+</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      {data.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </div>
  );
}

export default App;
