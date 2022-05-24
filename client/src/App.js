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
      <div className='current-time'>
        <p>The current time will be displayed when the button is clicked</p>
        <button onClick={()=> setTimeWord(talkTime(presentTime)) }> Click here</button>
        <h1> {timeWord} </h1>
      </div>
      <div className='input-time'>
        <p>Type your time into the input field in correct format</p>
      <input
        className='input-display' 
        type='search'
        placeholder='format "00:00"' 
        onChange={event => setInput(event.target.value)}
       />
       <button onClick={()=> setInputDisplay(talkTime(input))}>
         Display
       </button>
       	<h1>{inputDisplay}</h1>
      </div>
    </div>
    
  );

}

export default App;
