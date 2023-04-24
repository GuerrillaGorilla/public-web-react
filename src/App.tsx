import React from 'react';
import thinky from './Thinky.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={thinky} className="App-logo" alt="logo" />
        <p className="">
          TypeScript + Tailwind + React + Fathym
        </p>
        <a
          className="App-link"
          href="https://fathym.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-3xl font-bold no-underline">
            Hello world!
          </h1>
        </a>
      </header>
    </div>
  );
}

export default App;
