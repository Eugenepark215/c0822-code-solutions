/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const pop = stack.pop();
    if (stack.peek() === undefined) {
      stack.push(pop);
      return undefined;
    } else {
      const pop2 = stack.pop();
      stack.push(pop2);
      stack.push(pop);
      return pop2;
    }
  }
}
