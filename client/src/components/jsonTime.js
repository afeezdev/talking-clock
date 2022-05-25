import React, { useState } from 'react';


function JsonTime() {
    const [ jsonParameter, setJsonParameter ] = useState(' ')
  
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
        )
    }

export default JsonTime;