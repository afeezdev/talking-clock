import React, { useState } from 'react';

import { talkTime } from '../talkTime';

function InputTime() {
    const [ input, setInput ] = useState(' ')
    const [ inputDisplay, setInputDisplay ] = useState(' ')
      
    return (
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
        )
    }

export default InputTime;