/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const something = [];
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    while (stack.peek() !== undefined) {
      something.push(stack.pop());
    }
    if (something.length === 1) {
      stack.push(something[0]);
      return undefined;
    } else {
      for (let i = something.length - 1; i >= 0; i--) {
        stack.push(something[i]);
      }
      return something[1];
    }

  }
}
