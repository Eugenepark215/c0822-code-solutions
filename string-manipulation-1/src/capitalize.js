/* exported capitalize */
// word is entered and it's first letter is capitalized and rest lower case
// string.length[0] = beginning applied uppercase() rest lowercase()
// var for empty sting to store results of uppercase and lowercase
// word[0] uppercase + delete lowercase word[1]
// slice lowercase equals word from [1 onwards] + uppercase [0]

function capitalize(word) {
  var capitalizeResult = ' ';
  var firstLetter = word[0].toUpperCase();
  var lowerCaseLetters = word.toLowerCase();
  var currentWord = lowerCaseLetters.slice(1);
  capitalizeResult = firstLetter + currentWord;
  return capitalizeResult;
}
