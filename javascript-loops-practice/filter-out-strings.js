/* exported filterOutStrings */
// need to filter out string
// second loop to check value of each in array
// if array[i] = string push nothing else push
// typeof to get string
// value[i] typeof string
function filterOutStrings(values) {
  var filterOutStringsArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      filterOutStringsArray.push();
    } else filterOutStringsArray.push(values[i]);
  }
  return filterOutStringsArray;
}
