/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return list;
  } else {
    list.next = list.next.next;
  }
}
