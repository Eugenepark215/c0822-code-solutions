/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const dequeue = queue.dequeue();
    if (queue.peek() === undefined) {
      return dequeue;
    } else {
      const dequeue2 = queue.dequeue();
      queue.enqueue(dequeue);
      return dequeue2;
    }
  }
}
