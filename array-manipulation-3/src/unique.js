/* exported unique */
// parameter array
// return an array containing the array elements once
// loop through array
// push into new array
// condition to check if the array already contains the element push if not
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
