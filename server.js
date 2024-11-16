const express = require('express');
const server = express();
const port = 5000;
server.get('/', (req, res) => {
    res.send("Hello world");
})

server.listen(port, () => {
    console.log(`running on port ${port}`);
})
