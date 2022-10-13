const fs = require('fs');
const entry = require('./data.json');

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
  });
} else if (process.argv[2] === 'create') {
  entry.notes[entry.nextId] = process.argv[3];
  entry.nextId++;
  fs.writeFile('data.json', JSON.stringify(entry, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'update') {
  entry.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(entry, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'delete') {
  entry.nextId--;
  delete entry.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(entry, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
