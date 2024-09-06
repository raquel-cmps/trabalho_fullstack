const express = require('express');
//const axio = require('axios');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});