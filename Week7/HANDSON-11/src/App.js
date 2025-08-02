import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import ClickMessage from './components/ClickMessage';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>Event Handling Example App</h1>
      <Counter />
      <Welcome />
      <ClickMessage />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
