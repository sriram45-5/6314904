import React from 'react';

const ClickMessage = () => {
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
};

export default ClickMessage;
