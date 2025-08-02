import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Method to increment the counter
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Method to say hello with a static message
  const sayHello = () => {
    console.log("Hello! You clicked the increment button.");
    alert("Hello! Member1.");
  };

  // Handler that calls both methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Handler for decrement
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
