import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import ScoreBelow70 from './Components/ScoreBelow70';
import OddPlayers from './Components/OddPlayers';
import EvenPlayers from './Components/EvenPlayers';
import ListofIndianPlayers from './Components/ListofIndianPlayers';

function App() {
  const flag = false;

  const players = [
    { name: 'Virat', score: 88 },
    { name: 'Rohit', score: 62 },
    { name: 'Dhoni', score: 75 },
    { name: 'Jadeja', score: 53 },
    { name: 'Ashwin', score: 90 },
    { name: 'Shikhar', score: 66 },
    { name: 'Bumrah', score: 81 },
    { name: 'Gill', score: 44 },
    { name: 'Hardik', score: 73 },
    { name: 'Pant', score: 58 },
    { name: 'Kuldeep', score: 61 },
  ];

  const IndianTeam = ['Virat', 'Rohit', 'Dhoni', 'Jadeja', 'Ashwin', 'Shikhar'];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiPlayers];

  return flag ? (
    <div>
      <h1>List of Players</h1>
      <ListofPlayers players={players} />

      <hr />

      <h1>List of Players having Scores Less than 70</h1>
      <ScoreBelow70 players={players} />
    </div>
  ) : (
    <div>
      <h1>Indian Team</h1>

      <h2>Odd Players</h2>
      <OddPlayers team={IndianTeam} />

      <hr />

      <h2>Even Players</h2>
      <EvenPlayers team={IndianTeam} />

      <hr />

      <h1>List of Indian Players Merged</h1>
      <ListofIndianPlayers players={IndianPlayers} />
    </div>
  );
}

export default App;
