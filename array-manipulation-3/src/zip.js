/* exported zip */
// first & second are array parameters
// given the values at the postion pair the two values into an array
// push that array into new array
// if there are no pair do not push
// need to check for the greater length between the 2 strings
// loop length will be dictatec by shorter string
function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  } else if (first.length < second.length) {
    for (i = 0; i < first.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  } else {
    for (i = 0; i < first.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  }
  return newArray;
}
