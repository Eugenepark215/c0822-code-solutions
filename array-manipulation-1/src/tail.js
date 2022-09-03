/* exported tail */
// array is entered and the values of the array except the 1st are returned
// loop that starts with i = 1
// push array except for array 1 into new array
function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  } return tailArray;
}
