import React, { useState } from 'react';
import './App.css';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function GuestGreeting(props) {
  return (
    <div>
      <h2>Please sign up</h2>
      <LoginButton onClick={props.onLogin} />
    </div>
  );
}

function UserGreeting(props) {
  return (
    <div>
      <h2>Welcome back!</h2>
      <LogoutButton onClick={props.onLogout} />
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <UserGreeting onLogout={handleLogoutClick} />
      ) : (
        <GuestGreeting onLogin={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
