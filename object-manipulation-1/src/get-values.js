/* exported getValues */
// given object return array of the values
// can't use object.values
// for in loop
// push object[x] into new array
function getValues(object) {
  var getValuesArray = [];
  for (var x in object) {
    getValuesArray.push(object[x]);
  }
  return getValuesArray;
}
