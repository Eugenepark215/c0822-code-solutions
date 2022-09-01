/* exported sumAll */
// array into sum
// array.length indexes
// array[i] + array [i] * i times
// sum of array variable
// i variable
// for loop
// sum += numbers[i]
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
