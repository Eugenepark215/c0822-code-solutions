/* exported reverse */
// array is given and reversed into new array
// reverseloop and push into new array
function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  } return reverseArray;
}
