/* exported union */
// 2 paramenters array
// 2 elements are equal only push once into array
// new array to push values
// 2 for loops to loop through the array inside array and elements inside array
// push values into new array
// if element is not in array nothing

function union(first, second) {
  var newArray = [];
  var newArrayArray = [first, second];
  for (var i = 0; i < newArrayArray.length; i++) {
    for (var j = 0; j < newArrayArray[i].length; j++) {
      if (!newArray.includes(newArrayArray[i][j])) {
        newArray.push(newArrayArray[i][j]);
      }
    }
  }
  return newArray;
}
