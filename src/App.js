import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // fetch('localhost:3000/users')
  //     .then(response => response.json())
  //     .then(users => console.warn(users))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  // test(){
  //   fetch('localhost:3000/users')
  //     .then(response => response.json())
  //     .then(users => console.warn(users))
  // }
}

export default App;
