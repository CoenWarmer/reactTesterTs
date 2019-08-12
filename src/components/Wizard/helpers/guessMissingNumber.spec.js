import { guessMissingNumber } from './guessMissingNumber';

describe('guessMissingNumber', () => {
  test('0,1,2,3 should return 4', () => {
    expect(guessMissingNumber('0,1,2,3')).toBe(4);
  });

  test('5,3,1,4 should return 2', () => {
    expect(guessMissingNumber('5,3,1,4')).toBe(2);
  });
});
