import React, { useState } from 'react';

import { talk } from './talkTime'

import './App.css';

const presentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;



function App() {
  const [ timeWord, setTimeWord ] = useState(' ')
  return (
    <div className="App">
      <p>The current time will be dispaly when the button is clicked</p>
      <button onClick={()=> setTimeWord(talk(presentTime)) }> Click here</button>
      <h1> {timeWord} </h1>
    </div>
  );
}

export default App;
