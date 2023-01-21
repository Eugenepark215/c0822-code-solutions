const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log(overFive);

const startWithE = names.filter(name => name[0] === 'E');
console.log(startWithE);

const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log(haveD);

function filter(array, predicate) {
  var copyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      copyArray.push(array[i]);
    }
  }
  return copyArray;
}

function predicateEven(i) {
  if (i % 2 === 0) {
    return true;
  }
}

console.log(filter(numbers, predicateEven));

function predicateOverFive(i) {
  if (i > 5) {
    return true;
  }
}

console.log(filter(numbers, predicateOverFive));

function predicateStartWithE(i) {
  if (i[0] === 'E') {
    return true;
  }
}

console.log(filter(names, predicateStartWithE));

function predicateHaveD(i) {
  if (i.includes('D') || i.includes('d')) {
    return true;
  }
}

console.log(filter(names, predicateHaveD));
