const shift = require('./array-shift.js')

const array = [2, 4, 6, 8];
const insertNum = 5
const result = shift(array, insertNum);

describe('shifting the array', () => {
  it('shift array', () => {
    console.log(result);
    
    expect(result).toStrictEqual([5, 2, 4, 6, 8])
  })
})