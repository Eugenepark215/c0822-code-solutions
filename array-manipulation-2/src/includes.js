/* exported includes */
// given an array and a value
// return boolean based on if value is wihtin array
// loop
// if else to check if array[i] is value

function includes(array, value) {
  var trueOrFalse = false;
  if (array.indexOf(value) !== -1) {
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
}
