var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('maximumValueResult:', maximumValue);

var heroes = ['Ironman', 'Batman', 'Superman', 'Greenlantern'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndexResults:', randomIndex);

var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [
  {
    title: 'Naruto',
    author: 'Masasashi Kishimoto'
  },
  {
    title: 'Berserk',
    author: 'Kentaro Miura'
  },
  {
    title: 'Chainsaw Man',
    author: 'Tatsuki Fujimoto'
  }
];

var lastBook = library.pop();
console.log('lastBookResults:', lastBook);

var firstBook = library.shift();
console.log('firstBookResults:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('libraryResults:', library);

var fullName = 'Eugene Park';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastNameResults:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyNameResults:', sayMyName);
