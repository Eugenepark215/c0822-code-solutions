/* exported oddOrEven */
// new array
// sort through the array values - for loop with length
// if else - even if divisable by 2 push 'even' into array and else push 'odd
// return new array
function oddOrEven(numbers) {
  var oddOrEvenArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArray.push('even');
    } else {
      oddOrEvenArray.push('odd');
    }
  }
  return oddOrEvenArray;
}
