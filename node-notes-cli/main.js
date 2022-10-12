const fs = require('fs');
// const data = require('./data.json');

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
  });
} else if (process.argv[2] === 'create') {
  fs.writeFile('data.json', process.argv[3] + '\n', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
