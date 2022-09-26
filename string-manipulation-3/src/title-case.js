/* exported titleCase */
// given string parameter apply APA format
// first letter of word capitalized
// letters after '-' cap
// word after word containg ':' cap
// length > 3 cap
// JavaScript API
// lowercase conjunctions (words like and, or, nor, and but),
// articles (the words a, an, and the),
// prepositions (words like as, at, by, for, in, of, on, per, and to
// seperate words from title make into array
// for loop to loop through words
// if/else statements to apply Uppercase or lowercase
// first letter of title always cap

function titleCase(title) {
  title = title.toLowerCase();
  title = title.split(' ');
  for (var i = 0; i < title.length; i++) {
    if (title[i].includes('javascript')) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1, 4) + title[i][4].toUpperCase() + title[i].slice(5);
    }
    if (title[i].includes('api')) {
      title[i] = 'API';
    }
    if (title[i].length >= 4) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    }
    if (title[i].length < 4 && title[i] !== 'and' && title[i] !== 'or' && title[i] !== 'nor' && title[i] !== 'but' && title[i] !== 'a' && title[i] !== 'an' && title[i] !== 'the' && title[i] !== 'as' && title[i] !== 'at' && title[i] !== 'by' && title[i] !== 'for' && title[i] !== 'in' && title[i] !== 'of' && title[i] !== 'on' && title[i] !== 'per' && title[i] !== 'to') {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    }
    if (title[i].includes(':')) {
      title[i + 1] = title[i + 1][0].toUpperCase() + title[i + 1].slice(1);
    }
    title[0] = title[0][0].toUpperCase() + title[0].slice(1);
    for (var j = 0; j < title[i].length; j++) {
      if (title[i][j] === '-') {
        title[i] = title[i][0].toUpperCase() + title[i].slice(1, j + 1) + title[i][j + 1].toUpperCase() + title[i].slice(j + 2);
      }
    }
  }
  return title.join(' ');
}
