/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let number = 0;
  let value = 0;
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    while (queue.peek() !== undefined) {
      value = queue.dequeue();
      number++;
      if (number === 1 && queue.peek() === undefined) {
        return value;
      } else if (queue.peek() > value) {
        return value;
      } else if (queue.peek() < value) {
        queue.enqueue(value);
      }
    }
  }
}
