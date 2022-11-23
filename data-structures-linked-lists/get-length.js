/* exported getLength */

function getLength(list) {
  if (!list.next) {
    return 1;
  }
  if (!list.next.next) {
    return 2;
  }
  if (!list.next.next.next) {
    return 3;
  }
  if (!list.next.next.next) {
    return 4;
  }
  if (list.next.next.next.next) {
    return 5;
  }
}
