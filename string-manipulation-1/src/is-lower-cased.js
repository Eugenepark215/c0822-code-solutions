/* exported isLowerCased */
// same concept as uppercased function excpet lowercase
// convert string into lowercase and check to see if true/false

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
