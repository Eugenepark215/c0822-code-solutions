/* exported flatten */
// array parameter return new array with one level unwrapped
// for loop to loop through array parameter
// if/else to check if value in the array is an array
// double for loop to go inside one layer of array and push values into new array

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
