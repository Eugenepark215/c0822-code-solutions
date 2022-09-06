/* exported isUpperCased */
// word = string entered and boolean is returned
// needs to check if all characters are uppercased
// if not to end to check letters in string
// can uppercase to convert current string to all uppercase and check to see if true

function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
