import React, { Component } from 'react';

import { talkTime, presentTime } from '../utils/talkTime';



class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = { timeInWord: "" };
    }

    timeDispay = () => {
        window.location.reload(false);
      }

    componentDidMount() {
        let time = talkTime(presentTime)
        this.setState({ timeInWord: time })
    }

    render() {
        
        return (
            <div id='current-time' className='current-time'>
                <h1>Objctive 1</h1>
                <p>The current time is:</p>
                <button onClick={() => this.timeDispay()}>
                {/* () => onRouteChange('register') */}
                    Refresh
                </button>
                <h1 id='time-word'> {this.state.timeInWord} </h1>
            </div>
        );
      }

}

export default CurrentTime;