import React, { Component } from 'react';

import { talkTime } from '../talkTime';

const presentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;


class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = { timeInWord: "" };
    }

    timeDispay = () => {
        let time = talkTime(presentTime)
        this.setState({ timeInWord: time })
    }

    render() {
        
        return (
            <div id='current-time' className='current-time'>
                <h1>Objctive 1</h1>
                <p>The current time will be displayed when the button is clicked</p>
                <button onClick={this.timeDispay}>
                    Click Here
                </button>
                <h1 id='time-word'> {this.state.timeInWord} </h1>
            </div>
        );
      }

}

export default CurrentTime;