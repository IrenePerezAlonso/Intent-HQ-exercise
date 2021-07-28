import React, { useState } from "react";
import './App.css';

function Total(props) {

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
