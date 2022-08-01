const express = require('express');
const server = express();
require('dotenv').config({path: "./.env"})

server.get('/', (req, res) => {
    res.send('Hello World!, the beginning of a new story');
})


server.listen(process.env.PORT || 5000, () => {
    console.log('server listen');
})