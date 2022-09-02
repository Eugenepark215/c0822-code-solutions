/* exported isVowel */
// char single string character
// returns boolean
// true if vowel false if not
// if statement that contains all upper/lower vowels

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
