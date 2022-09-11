/* exported pick */
// given source = object & key = arrays consisting of strings
// return new object with the values
// if keys are not in object return empty object
function pick(source, keys) {
  var result = {};
  var array = Object.keys(source);
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < keys.length; j++) {
      if (array[i] === keys[j]) {
        result[keys[j]] = source[array[i]];
      }
    }
  }
  return result;
}
