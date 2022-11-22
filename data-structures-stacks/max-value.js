/* exported maxValue */

function maxValue(stack) {
  let max = 0;
  let pop = 0;
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      max = stack.peek();
      pop = stack.pop();
      if (pop > max) {
        const max = pop;
        return max;
      } else if (stack.peek() < max) {
        return max;
      }
    }
  }
}
