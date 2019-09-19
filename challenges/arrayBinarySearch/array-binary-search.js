function binarySearchForReal(arr, searchValue) {
  let top = arr.length - 1;
  let bottom = 0;
  let mid = 0;

  while(bottom <= top) {
    if(arr[mid] === searchValue) {
      return arr[mid];
    } else if(searchValue > arr[bottom]) {
      bottom = mid + 1;
    } else {
      top = mid - 1;
    }
  }
  return -1;
}

module.exports = {
  binarySearchForReal
};