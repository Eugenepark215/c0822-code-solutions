/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return list;
  } else {
    list.next.data = list.next.next.data;
    list.next.next.data = list.next.next.next.data;
    list.next.next.next = null;
  }
}
