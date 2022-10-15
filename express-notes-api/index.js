const express = require('express');
var app = express();

const dataJSON = require('./data.json');

const notes = [];
// var nextId = 1;

app.get('/api/notes', (req, res) => {
  for (const x in dataJSON.notes) {
    notes.push(dataJSON.notes[x]);
  }
  res.status(200).json(notes);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server 3000 is listening!');
});
