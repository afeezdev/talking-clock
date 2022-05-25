import React, { useState } from 'react';

import { talkTime } from '../talkTime';


function CurrentTime() {
    const [ timeWord, setTimeWord ] = useState(' ')

    const presentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
      
    return (
        <div className='current-time'>
            <h1>Objctive 1</h1>
            <p>The current time will be displayed when the button is clicked</p>
            <button onClick={()=> setTimeWord(talkTime(presentTime)) }> Click here</button>
            <h1> {timeWord} </h1>
        </div>
    )
}

export default CurrentTime;