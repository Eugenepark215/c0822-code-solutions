/* exported pick */
// given source = object & key = arrays consisting of strings
// return new object with the values
// if keys are not in object return empty object
function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    for (var x in source) {
      if (x.includes(keys[i])) {
        result[keys[i]] = source[x];
      }
    }
  }
  return result;
}
