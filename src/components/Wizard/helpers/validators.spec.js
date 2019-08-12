import { validateBoxSize, validateBoxElements } from './validators';

describe('validateBoxSize', () => {
  test('should not deem an empty string valid', () => {
    expect(validateBoxSize('')).toMatchObject({
      valid: false,
    });
  });

  test('should succeed if a number lower than and including 10 is passed', () => {
    expect(validateBoxSize(10)).toMatchObject({
      valid: true,
    });
  });

  test('should fail if a number higher than 10 is passed', () => {
    expect(validateBoxSize(11)).toMatchObject({
      valid: false,
    });
  });

  test('should not pass an error message when the entry is valid', () => {
    expect(validateBoxSize(10)).toMatchObject({
      errorMessage: '',
    });
  });
});

describe('validateBoxElements', () => {
  test('should throw an error when you dont pass a boxSize', () => {
    expect(() => {
      validateBoxElements('');
    }).toThrow();
  });

  test('should not deem an empty string valid', () => {
    expect(validateBoxElements('', 0)).toMatchObject({
      valid: false,
    });
  });

  test('should not accept a string that contains anything other than numbers, spaces or commas', () => {
    expect(validateBoxElements('asd', 0)).toMatchObject({
      valid: false,
    });
    expect(validateBoxElements('1,2', 2)).toMatchObject({
      valid: false,
    });
  });

  test('should not accept a string that contains a different number of elements when parsed to an array than passed as boxSize', () => {
    expect(validateBoxElements('0,1,2', 3)).toMatchObject({
      valid: true,
    });
    expect(validateBoxElements('0,1,2', 2)).toMatchObject({
      valid: false,
    });
  });

  test('should not accept a string that does not contain a 0', () => {
    expect(validateBoxElements('0,1,2', 3)).toMatchObject({
      valid: true,
    });
    expect(validateBoxElements('4,1,2', 3)).toMatchObject({
      valid: false,
    });
  });

  test('should not accept duplicates in the string', () => {
    expect(validateBoxElements('0,1,2,1', 4)).toMatchObject({
      valid: false,
    });
  });
});
