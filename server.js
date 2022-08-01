const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!, the beginning of a new story');
})


server.listen(5000, () => {
    console.log('server listen');
})