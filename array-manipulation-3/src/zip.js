/* exported zip */
// first & second are array parameters
// given the values at the postion pair the two values into an array
// push that array into new array
// if there are no pair do not push
// need to check for the greater length between the 2 strings
// math.min to fine shorter length of first and second string set in variable
function zip(first, second) {
  var newArray = [];
  var shorterLength = Math.min(first.length, second.length);
  for (var i = 0; i < shorterLength; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
