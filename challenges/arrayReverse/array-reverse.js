
let array = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
  for(let i = 0, j = array.length - 1; i < j; i++, j--) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}
reverseArray(array);