/* exported truncate */
// length - number value
// string input
// string input is cut down to the length and appends ...
// loop that concludes at given length
// add '...' at the end

function truncate(length, string) {
  var object = '';
  for (var i = 0; i < length; i++) {
    object += string[i];
  }
  return object + '...';
}
