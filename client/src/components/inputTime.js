import React, { Component } from 'react';

import { talkTime } from '../talkTime';

class InputTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTime: "",
            timeInWord: ""
            };
    }

    onInputChange = (event) => {
		this.setState({ inputTime: event.target.value });
	};

    timeDispay = () => {
        let time = talkTime(this.state.inputTime)
        this.setState({ timeInWord: time })
    }

    render() {
        
        return (
            <div className='input-time'>
            <h1>Objctive 2</h1>
            <p>Type your time into the input field in correct format</p>
            <input
                className='input-display' 
                type="text"
                placeholder='format "00:00"' 
                onChange={this.onInputChange}
            />
            <button onClick={this.timeDispay}>
                Display
            </button>
       	    <h1>{this.state.timeInWord}</h1>
        </div>
        );
      }

}

export default InputTime;