/* exported takeRight */
// array parameter and count = number
// given an array take the count,number away from end of array
// loop
// loop starts at array.length - count
// push into new array
// if count is larger than array return array
function takeRight(array, count) {
  var takeRightArray = [];
  for (var i = (array.length - count); i < array.length; i++) {
    if (array.length === 0) {
      return [];
    } else if (count > array.length) {
      return array;
    } else {
      takeRightArray.push(array[i]);
    }
  }
  return takeRightArray;
}
