function treeIntersect(firstTree, secondTree){
  return firstTree.preOrder().reduce((acc, value) => {
    if(secondTree.contains(secondTree.root, value)) acc.push(value);
    return acc;
  }, []);
}

module.exports = treeIntersect;