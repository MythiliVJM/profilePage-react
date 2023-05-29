import React from 'react';
import './App.css';
import Navbar from './components/Navigation/navBar';
import Profile from './components/Maincontent/Profile';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Profile></Profile>
        
    </div>
  );
}

export default App;
