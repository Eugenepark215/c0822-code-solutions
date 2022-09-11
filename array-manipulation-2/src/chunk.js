/* exported chunk */
// given array & size =number
// return new array with sub array with size given;
// loop
// push into new array
// create another array that targets last element array[-1]
// push elements into secondary array until the array length is the size of count or if last element dne
// once secondary array length matches size, push secondary length into new array

function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i++) {
    var remaining = chunkArray[chunkArray.length - 1];
    if (!remaining || remaining.length === size) {
      chunkArray.push([array[i]]);
    } else {
      remaining.push(array[i]);
    }
  }
  return chunkArray;
}
