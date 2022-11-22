/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  let something = '';
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    something = stack.pop();
    stack.push(value);
    stack.push(something);
  }
}
