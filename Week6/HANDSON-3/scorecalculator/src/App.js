import React from 'react';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Management Portal</h1>
      <CalculateScore
        name="Steeve"
        school="DNV Public School"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
