/* exported invert */
// source = object
// return with the object and value reversed
// for in loop
// add the values of source into new object
// set the values inside new object as new property and set value as name
function invert(source) {
  var inverObject = {};
  for (var x in source) {
    inverObject[source[x]] = x;
  }
  return inverObject;
}
