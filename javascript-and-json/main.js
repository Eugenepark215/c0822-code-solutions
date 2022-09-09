var arrayJS = [
  {
    isbn: '1',
    title: 'Book 1',
    author: 'Author 1'
  },
  {
    isbn: '2',
    title: 'Book 2',
    author: 'Author 2'
  },
  {
    isbn: '3',
    title: 'Book 3',
    author: 'Author 3'
  }
];
console.log('arrayJS typeof result:', typeof arrayJS);
var stringifyArrayJS = JSON.stringify(arrayJS);
console.log('typeof JSON.stringify(arrayJS):', typeof stringifyArrayJS);

var jsonString = {
  id: '12345',
  name: 'Cool Guy'
};

var stringifyjsonString = JSON.stringify(jsonString);
console.log('jsonSting typeof result:', typeof stringifyjsonString);

var parsed = JSON.parse(stringifyjsonString);
console.log('Result of typeof JSON.parse(jsonString):', typeof parsed);
