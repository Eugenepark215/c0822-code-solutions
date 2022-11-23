/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  if (!list.next) {
    list.next = new LinkedList(value);
  } else if (!list.next.next) {
    list.next.next = new LinkedList(value);
  } else if (!list.next.next.next) {
    list.next.next.next = new LinkedList(value);
  } else if (!list.next.next.next.next) {
    list.next.next.next.next = new LinkedList(value);
  }
}
