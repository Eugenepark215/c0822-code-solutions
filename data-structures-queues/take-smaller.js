/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const dequeue = queue.dequeue();
    if (queue.peek() === undefined) {
      return dequeue;
    } else {
      const dequeue2 = queue.dequeue();
      if (dequeue < dequeue2) {
        queue.enqueue(dequeue2);
        return dequeue;
      } else if (dequeue === dequeue2) {
        queue.enqueue(dequeue2);
        return dequeue;
      } else if (dequeue > dequeue2) {
        queue.enqueue(dequeue);
        return dequeue2;
      }
    }
  }
}
