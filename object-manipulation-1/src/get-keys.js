/* exported getKeys */
// given object return array of object property
// can't use object.keys
// for in loop
// push keys into new array
function getKeys(object) {
  var getKeysArray = [];
  for (var x in object) {
    getKeysArray.push(x);
  }
  return getKeysArray;
}
