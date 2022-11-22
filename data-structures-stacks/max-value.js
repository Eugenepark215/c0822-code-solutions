/* exported maxValue */

function maxValue(stack) {
  const something = [];
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      something.push(stack.pop());
    }
    return Math.max(...something);
  }
}
