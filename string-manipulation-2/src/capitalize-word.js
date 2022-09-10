/* exported capitalizeWord */
// string parameter
// first letter is Capitalized and rest is lowercased
// JavaScript is always JavaScript
// capitalize(word[1]) + lowercase every letter
// slice for word[1]
// can lowercase the word and check if it incldue 'javascript'
// return Javascript if so

function capitalizeWord(word) {
  var capitalizeResult = ' ';
  var firstLetter = word[0].toUpperCase();
  var lowerCaseLetters = word.toLowerCase();
  var currentWord = lowerCaseLetters.slice(1);
  if (lowerCaseLetters.includes('javascript')) {
    return 'JavaScript';
  } else {
    capitalizeResult = firstLetter + currentWord;
  }
  return capitalizeResult;
}
