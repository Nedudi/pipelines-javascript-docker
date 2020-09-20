'use strict';

const express = require('express');

const PORT = 8090;
// const HOST = '0.0.0.0';



const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT);
///console.log(`Running on http://${HOST}:${PORT}`);