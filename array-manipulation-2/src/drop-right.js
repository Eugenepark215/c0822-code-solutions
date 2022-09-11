/* exported dropRight */
// given an array and count = number
// given an array delete the number of elements from end
// loop
// stop loop at array.length -count
// push into new array
function dropRight(array, count) {
  var dropRightArray = [];
  for (var i = 0; i < (array.length - count); i++) {
    if (array.length === 0) {
      return [];
    } else {
      dropRightArray.push(array[i]);
    }
  }
  return dropRightArray;
}
