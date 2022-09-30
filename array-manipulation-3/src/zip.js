/* exported zip */
// first & second are array parameters
// given the values at the postion pair the two values into an array
// push that array into new array
// if there are no pair push into array by itself
function zip(first, second) {
  var newArray = [];
  var newArrayArray = [];
  if (first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      newArrayArray.push(first[i]);
      newArrayArray.push(second[i]);
      newArray.push(newArrayArray);
    }
  } if (first.length < second.length) {
    for (i = 0; i < first.length; i++) {
      newArrayArray.push(first[i]);
      newArrayArray.push(second[i]);
      newArray.push(newArrayArray);
    }
  }
  return newArray;
}
