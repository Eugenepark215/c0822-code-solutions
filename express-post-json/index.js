const express = require('express');
const app = express();

const grades = {};
var nextId = 1;

app.get('/api/grades', (req, res) => {
  var array = [];
  for (const x in grades) {
    array.push(grades[x]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  // if (res.status(201)) {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  // }
  res.status(201).json(grades[nextId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server 3000 is listening!');
});
