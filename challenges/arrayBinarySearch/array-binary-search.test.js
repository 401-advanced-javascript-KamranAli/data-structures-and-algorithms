const binarySearchForReal = require('./array-binary-search');

const array = [4, 8, 15, 16, 23, 42];
const searchValue = 15;
const result = binarySearchForReal(array, searchValue);

describe('Search for value', () => {
  it('search for 15', () => {
    expect(result).toStrictEqual([15]);
  });
});