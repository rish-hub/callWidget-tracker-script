import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CallWidget from './components/CallWidget/CallWIdget';
import self from './helper/UserTracking/UserTracking'
function App() {

  useEffect(() => {
    self.init()
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <CallWidget />
    </div>
  );
}

export default App;
