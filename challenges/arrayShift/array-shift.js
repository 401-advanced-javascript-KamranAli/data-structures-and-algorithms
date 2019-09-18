
function shift(array, insertNum) {
  const startArray = [];
  const stuff = array.length;
  for (let i = 0; i < stuff; i++) {
    startArray[i +1] = array[i]
  }
  startArray[0] = insertNum;  
  return startArray;
}

module.exports = shift;