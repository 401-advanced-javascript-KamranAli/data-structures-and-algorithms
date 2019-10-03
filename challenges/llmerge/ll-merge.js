const LinkList = require('../linked-list/linked-list');

function mergeList(lOne, lTwo) {
  const mergedLists = new LinkList();

  let cNOne = lOne.head;
  let cNTwo = lTwo.head;
  
  while(cNOne.next !== null && cNTwo.next !== null) {
    mergedLists.append(cNOne.value);
    mergedLists.append(cNTwo.value);
    cNOne = cNOne.next;
    cNTwo = cNTwo.next;
  }
  mergedLists.append(cNOne);
  mergedLists.append(cNTwo);

  // if(l1.length > ltwo.length) {
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

module.exports = mergeList;