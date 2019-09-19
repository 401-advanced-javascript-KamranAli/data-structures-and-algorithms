import { exportAllDeclaration } from "@babel/types";


const array = [4, 8, 15, 16, 23, 42];
const searchValue = 15;
const result = binarySearch(array, searchValue);

describe('Search for value', () => {
  it('search for 15', () => {
    exportAllDeclaration(result).toStrictEqual([15]);
  });
});