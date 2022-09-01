/* exported countdown */
// number is going change
// array is going to change .push
// number will be subtracted until 0
// array will have results of the decrement --
// number = 5
// array = 'variable'
// i = currentNumber
// while (i < number) loop will run number times
// array.push(i)
function countdown(number) {
  var countdownArray = [];
  var currentValue = 0;
  while (currentValue < number + 1) {
    countdownArray.push(number - currentValue);
    currentValue++;
  }
  return countdownArray;
}
