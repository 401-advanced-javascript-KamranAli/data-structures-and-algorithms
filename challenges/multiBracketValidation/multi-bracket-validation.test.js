const multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation');

describe('Multi Bracket Validation', () => {
  it('returns a boolean', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}()[]')).toBe(true);
    expect(multiBracketValidation('{}[[stuff]]')).toBe(true);
    expect(multiBracketValidation('{}()[[]]')).toBe(true);
    expect(multiBracketValidation('{}{stuff}[things](())')).toBe(true);
    expect(multiBracketValidation('{([])}')).toBe(true);
    expect(multiBracketValidation('{}]')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});