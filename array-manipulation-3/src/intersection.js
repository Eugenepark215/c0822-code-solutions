/* exported intersection */
// 2 parameters
// return the value in both array
// for loop to compare both arrays
// condtional to check if the values are same
// push into new array if it same
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
