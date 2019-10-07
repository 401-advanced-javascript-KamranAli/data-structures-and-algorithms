const binarySearch = require('./array-binary-search.js');

const array = [4, 8, 15, 16, 23, 42];
const searchValue = 15;
const result = binarySearch(array, searchValue);

describe('binary search', () => {
  
  it('binary search', () => {
    expect(result).toBe(2);
  });

});