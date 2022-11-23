/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const old1 = list.next.data;
  const old2 = list.next.next.data;
  const old3 = list.next.next.next.data;
  list.next.data = value;
  list.next.next.data = old1;
  list.next.next.next.data = old2;
  list.next.next.next.next = new LinkedList(old3);
}
