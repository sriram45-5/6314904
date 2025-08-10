import React from 'react';

const Welcome = () => {
  const sayWelcome = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
    </div>
  );
};

export default Welcome;
