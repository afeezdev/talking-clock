const bodyParser = require('body-parser');
const cors = require('cors');


const { talkTime } = require('./talktime')

const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.post('/human_friendly', (req, res) => { 
    const { numericTime } = req.body
  res.json(talkTime(numericTime));
}); 
