/* exported omit */
// source = object & keys = array of strings
// given object and keys omit
// the property not inside keys are returned as new object
function omit(source, keys) {
  var omitObject = {};
  for (var x in source) {
    if (keys.includes(x) === false) {
      omitObject[x] = source[x];
    }
  }
  return omitObject;
}
