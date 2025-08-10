import React from 'react';

const OddPlayers = ({ team }) => {
  const [first, , third, , fifth] = team;

  return (
    <ul>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </ul>
  );
};

export default OddPlayers;
