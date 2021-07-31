import React from 'react';
import './Total.css';

function Total({ totalValue }) {
  return (
    <div className="app-totalValue">
      <h1 className="app-totalValue__tittle">Total Value:</h1>
      <div className="app-totalValue__number">{totalValue}</div>
    </div>
  )
}

export default Total;
