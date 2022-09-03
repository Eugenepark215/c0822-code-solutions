/* exported compact */
// need to omit false, null, Nan, 0, -0, undefined, ''
// if array[i] are truly values it will be pushed into array
// if false it will be left out
function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  } return compactArray;
}
