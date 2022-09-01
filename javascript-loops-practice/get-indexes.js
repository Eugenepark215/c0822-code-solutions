/* exported getIndexes */
// array.length or index
// need to put value of index into new array
// array.length to get the number the loop goes
// if array length is 5; loop will run 5 times and increment i 5 times
// array.push(i)
function getIndexes(array) {
  var getIndexesArray = [];
  for (var i = 0; i < array.length; i++) {
    getIndexesArray.push(i);
  }
  return getIndexesArray;
}
