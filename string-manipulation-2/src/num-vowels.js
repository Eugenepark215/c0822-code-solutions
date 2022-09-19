/* exported numVowels */
// string parameter
// return number of vowels in string: a e i o u A E I O U
// loop through string and if else to check for vowel
// can incretment a variabel and return the varibale
function numVowels(string) {
  var vowelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
