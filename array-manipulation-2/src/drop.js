/* exported drop */
// array parameter given a number take out that number of elements from index 0
// loop
// var starts at count everything after is pushed into new array
function drop(array, count) {
  var dropArray = [];
  for (var i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
