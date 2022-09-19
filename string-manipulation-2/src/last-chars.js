/* exported lastChars */
// length = number & string parameter
// given length return the last charactes of string
// start the loop at index where remaning characters
// length bigger thatn string return string
//
function lastChars(length, string) {
  var lastCharsResult = '';
  for (var i = (string.length - length); i < string.length; i++) {
    if (length > string.length) {
      return string;
    } else {
      lastCharsResult += string[i];
    }
  }
  return lastCharsResult;
}
