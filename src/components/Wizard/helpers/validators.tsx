const validateBoxSize = (value: string | number) => {
  // We need an input in order to be valid, but we don't want to return an error message
  // as that is a bit unfriendly.
  if (value === '') {
    return {
      valid: false,
      errorMessage: '',
    };
  }

  // Check for box sizes bigger than 10
  if (value > 10) {
    return {
      valid: false,
      errorMessage: 'Please fill in a number between 1 and 10.',
    };
  }

  // All validations succesful!
  return {
    valid: true,
    errorMessage: '',
  };
};

const validateBoxElements = (value: string | number, boxSize: number) => {
  if (boxSize === undefined || boxSize === null || isNaN(boxSize)) {
    throw Error('a boxSize as a number is required');
  }

  // Check for empty value
  if (value === '') {
    return { valid: false, errorMessage: '' };
  }

  // Test for other things than numbers or commas
  if (
    !String(value)
      .replace(' ', '')
      .match(/^[0-9](,[0-9])*/)
  ) {
    return {
      valid: false,
      errorMessage: "Only enter numbers or comma's please :)",
    };
  }

  // Test if entered string, converted to array has same length as boxSize
  const arr = String(value)
    .replace(/,/g, ' ')
    .trim()
    .split(' ')
    .map(el => Number(el));

  if (arr.length !== Number(boxSize)) {
    return {
      valid: false,
      errorMessage: `Please enter the same amount of elements you entered in the previous step (you entered ${boxSize}), separated by a comma.`,
    };
  }

  // Test if there are no duplicates
  if (new Set(arr).size !== arr.length) {
    return {
      valid: false,
      errorMessage: 'Please enter only one of each element.',
    };
  }

  // Test if there is a 0 present
  if (arr.indexOf(0) === -1) {
    return {
      valid: false,
      errorMessage: 'Please enter a 0 to be guessed :)',
    };
  }

  // All validations successful!
  return {
    valid: true,
    errorMessage: '',
  };
};

export { validateBoxSize, validateBoxElements };
