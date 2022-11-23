/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const copyList = list;
  const newList = new LinkedList(value, copyList.data, copyList.next.data, copyList.next.next.data, copyList.next.next.next.data);
  return newList;
}
