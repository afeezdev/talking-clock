import React, { Component } from 'react';


class JsonTime extends Component {
  constructor(props) {
      super(props);
      this.state = { jsonParameter: "" };
  }

  onInputChange = (event) => {
		this.setState({ jsonParameter: event.target.value });
	};

  timeDispay = () => {
      alert(this.state.jsonParameter)
  }

getJsonResponse = () => {
  fetch("https://talk-clock-api.herokuapp.com/human_friendly", {
    method: "post",
    headers: { "Content-Type": "application/JSON" },
    body: JSON.stringify({
      numericTime: this.state.jsonParameter
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
          

  render() {
      
      return (
        <div className='json-time'>
          <h1>Objctive 3</h1>
          <p>Type your time in correct to get json response from the server</p>
          <input
            className='json-display' 
            type='text'
            placeholder='00:00' 
            onChange={this.onInputChange}
          />
          <button onClick={this.getJsonResponse}>
            Click for Json Response
          </button>
          </div>
      );
    }

}

export default JsonTime;