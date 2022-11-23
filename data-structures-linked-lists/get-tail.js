/* exported getTail */

function getTail(list) {
  if (list.next === null) {
    return list.data;
  } else {
    if (list.next.next === null) {
      return list.next.data;
    } else if (list.next.next.next === null) {
      return list.next.next.data;
    } else if (list.next.next.next.next === null) {
      return list.next.next.next.data;
    }
  }
}
