/* exported getLength */

function getLength(list) {
  let number = 0;
  if (!list.next) {
    return 1;
  } else {
    while (list) {
      list = list.next;
      number++;
    }
    return number;
  }

}
