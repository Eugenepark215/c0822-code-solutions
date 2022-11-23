/* exported getTail */

function getTail(list) {
  let tail = '';
  if (list.next === null) {
    return list.data;
  } else {
    while (list !== null) {
      tail = list.data;
      list = list.next;
    }
    return tail;
  }
}
