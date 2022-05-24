import React, { useState } from 'react';
import { talkTime } from './talkTime'

import './App.css';


function App() {
  const [ timeWord, setTimeWord ] = useState(' ')
  const [ input, setInput ] = useState(' ')
  const [ inputDisplay, setInputDisplay ] = useState(' ')
  const [ jsonParameter, setJsonParameter ] = useState(' ')

  
const presentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

const getJsonResponse = () => {
  fetch("http://localhost:5000/human_friendly", {
    method: "post",
    headers: { "Content-Type": "application/JSON" },
    body: JSON.stringify({
      numericTime: jsonParameter
    }),
  })
    .then((response) => response.json())
    .then((user) => {
      alert(JSON.stringify({
        numericTime: user
      }))
    })
    .catch((err) => {
      alert("Wrong Format or invalid time");
    });	
};

  return (
    <div className="App">
      <div className='current-time'>
        <h1>Objctive 1</h1>
        <p>The current time will be displayed when the button is clicked</p>
        <button onClick={()=> setTimeWord(talkTime(presentTime)) }> Click here</button>
        <h1> {timeWord} </h1>
      </div>
      <div className='input-time'>
      <h1>Objctive 2</h1>
        <p>Type your time into the input field in correct format</p>
      <input
        className='input-display' 
        type="text"
        placeholder='format "00:00"' 
        onChange={event => setInput(event.target.value)}
       />
       <button onClick={()=> setInputDisplay(talkTime(input))}>
         Display
       </button>
       	<h1>{inputDisplay}</h1>
      </div>
      <div className='json-time'>
      <h1>Objctive 3</h1>

        <p>Type your time in correct to get json response from the server</p>
      <input
        className='json-display' 
        type='text'
        placeholder='format "00:00"' 
        onChange={event => setJsonParameter(event.target.value)}
       />
       <button onClick={()=> getJsonResponse()}>
         Click for Json Response
       </button>
      </div>
    </div>
    
  );

}

export default App;
