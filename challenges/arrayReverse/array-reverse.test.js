const { test } = QUnit;

QUnit.module('array-reverse');

test('It should return an array in reverse order', assert => {
    const array = [1, 2, 3, 4];
    
    const result = reverseArray(4, 3, 2, 1)

    assert.equal(array, result);
});