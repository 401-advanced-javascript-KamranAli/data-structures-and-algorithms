
let newArray = [1, 2, 3, 4, 5, 6];

function reverseArray(array) {
    for (i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray
}

reverseArray();