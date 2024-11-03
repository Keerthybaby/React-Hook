import React, { useState,memo } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter,"counter");
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={()=>setCounter(counter + 1)}>Increament</button>
    </div>
  );
};

export default memo(Counter);