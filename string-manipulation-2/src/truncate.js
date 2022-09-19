/* exported truncate */
// length - number value
// string input
// string input is cut down to the length and appends ...
// loop that concludes at given length
// add '...' at the end
// if else to check empty & string.length < length

function truncate(length, string) {
  var object = '';
  for (var i = 0; i < length; i++) {
    if (string.length === 0) {
      return '...';
    } else if (string.length < length) {
      return string + '...';
    } else {
      object += string[i];
    }
  }
  return object + '...';
}
