/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var currentNumber = 1;
  var numbers = [];
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumber = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumber.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumber;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doulbed = [];
  for (var i = 0; i < numbers.length; i++) {
    doulbed.push((numbers[i]) * 2);
  }
  return doulbed;
}

function getKeys(object) {
  var keys = [];
  for (var x in object) {
    keys.push(x);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  }
  return values;
}
