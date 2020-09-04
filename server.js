const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(helmet());

server.get('/', (req, res) => {
    res.send('sprint project')
})

module.exports = server;