const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log('doubled:', doubled);

const prices = numbers.map(number => '$' + number + '.00');
console.log('prices:', prices);

const upperCased = languages.map(language => language.toUpperCase());
console.log('upperCased', upperCased);

const firstLetters = languages.map(language => language[0]);
console.log('firstLetters', firstLetters);

function map(array, transform) {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }
  return newArray;
}

function transformDouble(i) {
  return i * 2;
}

console.log('double', map(numbers, transformDouble));

function transformPrice(i) {
  return '$' + i + '.00';
}

console.log('price', map(numbers, transformPrice));

function transformUpperCase(i) {
  return i.toUpperCase();
}

console.log('upperCase', map(languages, transformUpperCase));

function transformFirstLetters(i) {
  return i[0].toUpperCase();
}

console.log('firstLetters', map(languages, transformFirstLetters));
