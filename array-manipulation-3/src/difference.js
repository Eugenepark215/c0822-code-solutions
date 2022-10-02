/* exported difference */
// 2 arrays
// compare 2 arrays and if there is an element present on both remove splice at position
// push the values into new array
// new array that will have its elemetns pushed by function
// if new array doesnt have the element inside push
// else remove the element

function difference(first, second) {
  var newArray = [];
  var newArrayArray = [first, second];
  for (var i = 0; i < newArrayArray.length; i++) {
    for (var j = 0; j < newArrayArray[i].length; j++) {
      if (!newArray.includes(newArrayArray[i][j])) {
        newArray.push(newArrayArray[i][j]);
      } else {
        newArray.splice(newArray.indexOf(newArrayArray[i][j]), 1);
      }
    }
  }
  return newArray;
}
