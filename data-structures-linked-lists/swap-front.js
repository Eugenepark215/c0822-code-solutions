/* exported swapFront */

function swapFront(list) {

  if (!list.next) {
    return list;
  } else {
    const swap1 = list.data;
    const swap2 = list.next.data;
    list.data = swap2;
    list.next.data = swap1;
    return list;
  }
}
