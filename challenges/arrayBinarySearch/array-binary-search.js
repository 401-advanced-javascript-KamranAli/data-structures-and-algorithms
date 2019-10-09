
function binarySearch(arr, searchValue) {

  let top = arr.length - 1;
  let bottom = 0;
  
  while(bottom <= top) {
    let mid = Math.floor((top + bottom) / 2);

    if(arr[mid] === searchValue) {
      return mid;
    } else if(searchValue > arr[mid]) {
      bottom = mid += 1;
    } else if(searchValue < arr[mid]) {
      top = mid -= 1;
    }
  }
  return -1;
}

module.exports = binarySearch;