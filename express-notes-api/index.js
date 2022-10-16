const express = require('express');
var app = express();
const dataJSON = require('./data.json');
const notes = [];
const error = require('./error.json');
// var nextId = 1;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  for (const x in dataJSON.notes) {
    notes.push(dataJSON.notes[x]);
  }
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id) > 0 && dataJSON.notes[req.params.id] === undefined) {
    error[404] = { error: 'cannot find note with id ' + req.params.id };
    res.status(404).json(error[404]);
  } else if (parseInt(req.params.id) > 0 && dataJSON.notes[req.params.id] !== undefined) {
    res.status(200).json(dataJSON.notes[req.params.id]);
  } else if (isNaN(parseInt(req.params.id)) || parseInt(req.params.id) < 0) {
    res.status(400).json(error[400]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server 3000 is listening!');
});
