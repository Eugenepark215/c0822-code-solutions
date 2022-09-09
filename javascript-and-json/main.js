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

console.log('arrayJS:', arrayJS);
console.log('Result of typeof arrayJS:', typeof arrayJS);

var stringifyArrayJS = JSON.stringify(arrayJS);
console.log('stringifArrayJS:', stringifyArrayJS);
console.log('Result of typeof JSON.stringify(arrayJS):', typeof stringifyArrayJS);

var jsonString = '{"id": "12345","name": "Cool Guy"}';

console.log('stringifyjsonString:', jsonString);

console.log('Result of typeof jsonSting :', typeof jsonString);

var parsed = JSON.parse(jsonString);
console.log('parsed:', parsed);
console.log('Result of typeof JSON.parse(jsonString):', typeof parsed);
