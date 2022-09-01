/* exported findIndex */
// need to find index position for array
// for loop to go through values inside array
// if else to sort through is value matches value in parameter
// return at which point array[i] = value
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}
