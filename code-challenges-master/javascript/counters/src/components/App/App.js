import React, { useState } from "react";
import { Counter, Total, Input } from '../';
import './App.css';

function App() {
  
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];

  const [fullData, setFullData] = useState(data || []);  
  const [isolatedData, setIsolatedData] = useState({ id: 4, value: 0 });

 
  const sumValues = (array = []) => array.length && array.reduce((accum, { value }) => { 
    accum += value;
    return accum;
  }, 0);

  const handleRemoveValue = (id, value) => {
    if (fullData.find(element => element.id === id)) {
      fullData.find(element => element.id === id).value = value - 1;
  
      setFullData([...fullData]);
    } else {
      setIsolatedData({id, value: value - 1});
    }
  };
  
  const handleAddValue = (id, value) => {
    if (fullData.find(element => element.id === id)) {
      fullData.find(element => element.id === id).value = value + 1;
      
      setFullData([...fullData]);
    } else {
      setIsolatedData({id, value: value + 1});
    }
  };

  return (
    <div className="app">
      {fullData.map((counter) => (
        <Counter key={counter.id} id={counter.id} value={counter.value} removeValue={handleRemoveValue} addValue={handleAddValue} />
        ))}
      <Counter key={isolatedData.id} id={isolatedData.id} value={isolatedData.value} removeValue={handleRemoveValue} addValue={handleAddValue}  />
      <div className="separator" />
      <Total totalValue={sumValues([...fullData, isolatedData])} />
      <Input addInitialNumber={setFullData}
      value={fullData} 
      ></Input>
    </div>
  );
}

export default App;
