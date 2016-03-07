'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello fucking world!\n');
});

app.listen(PORT);
console.log('Running on the fucking http://localhost:' + PORT);
