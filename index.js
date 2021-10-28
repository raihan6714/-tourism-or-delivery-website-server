const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//set middlewere
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('server on and alright');
})

app.listen(port, (req, res) => {
    console.log('server running on port', port);
})