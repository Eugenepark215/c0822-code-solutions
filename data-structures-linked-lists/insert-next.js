/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newList = new LinkedList(value);
  const otherList = new LinkedList(list.next.data, list.next.next.data, list.next.next.next.data);
  list.next = newList;
  list.next.next = otherList;
}
