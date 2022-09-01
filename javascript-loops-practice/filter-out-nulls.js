/* exported filterOutNulls */
// array of values
// new array push
// do not push null into new array
// second loop to check value of each array value
// if null push nothing else push value
function filterOutNulls(values) {
  var filterOutNullsArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      filterOutNullsArray.push(values[i]);
    } else delete values[i];
  }
  return filterOutNullsArray;
}
