/* exported take */
// array and nummber parameter
// given an array and number, an array with the number of elements will be returned
// empty variable array
// number of elements will be pushed
// loop
function take(array, count) {
  var takeArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      takeArray.push(array[i]);
    }
  }
  return takeArray;
}
