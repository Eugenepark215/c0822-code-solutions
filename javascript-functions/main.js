function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResults = greet('Beavis');
console.log('greetResults:', greetResults);

function getArea(width, height) {
  var rectangle = width * height;
  return rectangle;
}

var getAreaResults = getArea(17, 42);
console.log('getAreaResults:', getAreaResults);

var person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};

function getFirstName(person) {
  return person.firstName;
}
var getFirstNameResults = getFirstName(person);
console.log('getFirstNameResults:', getFirstNameResults);

var array = ['propane', 'and', 'propane', 'accessories'];

function getLastElement(array) {
  return array[array.length - 1];
}
var getLastElementResults = getLastElement(array);
console.log('getLastElementResults', getLastElementResults);
