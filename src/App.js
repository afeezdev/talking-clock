import React, { useState } from 'react';

import { talkTime } from './talkTime'

import './App.css';

const presentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;


function App() {
  const [ timeWord, setTimeWord ] = useState(' ')
  const [ input, setInput ] = useState(' ')
  const [ inputDisplay, setInputDisplay ] = useState(' ')


  return (
    <div className="App">
      <div>
        <p>The current time will be dispaly when the button is clicked</p>
        <button onClick={()=> setTimeWord(talkTime(presentTime)) }> Click here</button>
        <h1> {timeWord} </h1>
      </div>
      <div>
      <input 
        type='search'
        placeholder='format "00:00"' 
        onChange={event => setInput(event.target.value)}
       />
       <button onClick={()=> setInputDisplay(talkTime(input))}>
         Display
       </button>
       	<p>{inputDisplay}</p>
      </div>
    </div>
    
  );

}

export default App;
