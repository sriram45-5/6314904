import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="React Bootcamp" status="ongoing" mentor="Sriram" />
      <CohortDetails name="Java Full Stack" status="completed" mentor="Arjun" />
    </div>
  );
}

export default App;
