/* exported pick */
// given source = object & key = arrays consisting of strings
// return new object with the values
// if keys are not in object return empty object

// if source property is equal to keys property then add the source prop to obj
function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    for (var x in source) {
      if (x === (keys[i]) && source[x] !== undefined) {
        result[x] = source[x];
      }
    }

  }
  return result;
}
