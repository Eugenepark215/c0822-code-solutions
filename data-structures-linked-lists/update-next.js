/* exported updateNext */

function updateNext(list, value) {
  if (!list.next) {
    return list;
  } else {
    list.next.data = value;
  }
}
