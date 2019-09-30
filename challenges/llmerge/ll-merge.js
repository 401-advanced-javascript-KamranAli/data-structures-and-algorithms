const LinkList = require('../linked-list/linked-list');

const l1 = new LinkList();
const l2 = new LinkList();

l1.insert('1');
l2.insert('5');
l1.insert('3');
l2.insert('9');
l1.insert('2');
l2.insert('4');

function mergeList(l1, l2) {
  const mergedLists = new LinkList();

  let cN1 = l1.head;
  let cN2 = l2.head;
  
  while(cN1.next !== null && cN2.next !== null) {
    mergedLists.append(cN1);
    mergedLists.append(cN2.value);
    cN1 = cN1.next;
    cN2 = cN2.next;
  }
  mergedLists.append(cN1);
  console.log(cN1);
  mergedLists.append(cN2);
  console.log(cN2);

  // if(l1.length > l2.length) {
  //   cN1 = cN1.next;
  //   while(cN1.next) {
  //     mergedLists.append(cN1.value);
  //     cN1 = cN1.next;
  //   }
  //   mergedLists.append(cN1.value);
  // }

  // if(l2.length > l1.length) {
  //   cN2 = cN2.next;
  //   while(cN2.next) {
  //     mergedLists.append(cN2.value);
  //     cN2 = cN2.next;
  //   }
  //   mergedLists.append(cN2.value);
  // }
  return mergedLists.head;
}
mergeList(l1, l2);

module.exports = mergeList;