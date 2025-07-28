import React from 'react';
import './App.css';
import OfficeList from './components/OfficeList';
import officeImg from './assets/office.jpeg';

function App() {
  const element = "Office Space";
  const jsxatt = <img src={officeImg} width="25%" height="25%" alt="Office Space" />;

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <OfficeList />
    </div>
  );
}

export default App;
