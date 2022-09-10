/* exported firstChars */
// length = number & string parameter
// Return the numbner of characters of the length in the given string
// loop until the given length
// if legnth is longer than string.length return string
function firstChars(length, string) {
  var firstCharsResult = '';
  for (var i = 0; i < length; i++) {
    if (length > string.length) {
      return string;
    } else {
      firstCharsResult += string[i];
    }
  }
  return firstCharsResult;
}
