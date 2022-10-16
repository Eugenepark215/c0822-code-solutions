const express = require('express');
var app = express();
const dataJSON = require('./data.json');
const error = require('./error.json');
var nextId = dataJSON.nextId;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  var array = [];
  for (const x in dataJSON.notes) {
    array.push(dataJSON.notes[x]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id) > 0 && dataJSON.notes[req.params.id] === undefined) {
    error.cannotFindId = { error: 'cannot find note with id ' + req.params.id };
    res.status(404).json(error.cannotFindId);
  } else if (parseInt(req.params.id) > 0 && dataJSON.notes[req.params.id] !== undefined) {
    res.status(200).json(dataJSON.notes[req.params.id]);
  } else {
    res.status(400).json(error.positiveInteger);
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json(error.contentRequired);
  } else if (req.body.content !== undefined) {
    dataJSON.notes[nextId] = req.body;
    dataJSON.notes[nextId].id = nextId;
    nextId++;
    res.status(201).json(req.body);
  } else {
    console.error(error.unexpectedError);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server 3000 is listening!');
});
