/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return list;
  } else if (!list.next.next) {
    list.next = null;
  } else if (!list.next.next.next) {
    list.next.next = null;
  } else if (!list.next.next.next.next) {
    list.next.next.next = null;
  }
}
