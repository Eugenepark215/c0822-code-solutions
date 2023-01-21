/* exported countValues */

function countValues(stack) {
  let number = 0;
  if (stack.peek() === undefined) {
    return number;
  } else {
    while (stack.peek() !== undefined) {
      stack.pop();
      number++;
    }
    return number;
  }
}
