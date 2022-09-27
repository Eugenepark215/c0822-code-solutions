/* exported equal */
// 2 parameters with values
// return boolean
// compare both arrays with for loop
// if else to compare and return based

function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  } if (first[i] === second[i]) {
    return true;
  } else return false;
}
