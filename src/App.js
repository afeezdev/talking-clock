import React from 'react';

import CurrentTime from './components/currentTime';
import InputTime from './components/inputTime';
import JsonTime from './components/jsonTime';

import './App.css';


function App() {
  
  return (
    <div className="App">
      <CurrentTime />
      <InputTime />
      <JsonTime />
    </div>    
  );
}

export default App;
