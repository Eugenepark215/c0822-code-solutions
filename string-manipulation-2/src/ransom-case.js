/* exported ransomCase */
// string parameter
// every other character is uppercased
// even characters are uppercased or odd index values
// even index characters are lowercased
// string.length
// if (i % 2 === 0) toLowercase
function ransomCase(word) {
  var newCase = '';
  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      newCase += word[i].toLowerCase();
    } else {
      newCase += word[i].toUpperCase();
    }
  }
  return newCase;
}
