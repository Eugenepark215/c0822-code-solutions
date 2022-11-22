/* exported countValues */

function countValues(stack) {
  const something = [];
  if (stack.peek() === undefined) {
    return 0;
  } else {
    while (stack.peek() !== undefined) {
      something.push(stack.pop());
    }
    return something.length;
  }
}
