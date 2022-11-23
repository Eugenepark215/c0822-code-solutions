/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  } else if (!list.next) {
    return false;
  } else if (list.next.data === value) {
    return true;
  } else if (!list.next.next) {
    return false;
  } else if (list.next.next.data === value) {
    return true;
  } else if (!list.next.next.next) {
    return false;
  } else if (list.next.next.next.data === value) {
    return true;
  } else if (!list.next.next.next.next) {
    return false;
  } else if (list.next.next.next.next.data === value) {
    return true;
  } else if (!list.next.next.next.next.next) {
    return false;
  }
}
