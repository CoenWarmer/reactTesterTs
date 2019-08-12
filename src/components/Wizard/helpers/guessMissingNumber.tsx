const guessMissingNumber = (boxElements: string) => {
  /*
    Prepare box elements for calculating

    1. Convert comma separated string into array
    2. Cast all string elements to numbers (done with reduce to save from doing two loops with map + filter)
    3. Sort array elements sequentially
  */
  const boxArr = boxElements
    .split(',')
    .reduce(
      (acc, curr) => {
        const val = Number(curr);
        if (val !== 0) {
          return acc.concat(val);
        }
        return acc;
      },
      [] as number[]
    )
    .sort();

  /*
    Find missing number

    1. Create array with number elements starting from 1 up to same length as inputted box numbers
    2. For every element in this array, try to find it in boxArr.
    If it can't be found, that's our missing number.
  */
  return Array.from({ length: boxArr.length + 1 }, (e, i) => i + 1).reduce(
    (acc, el) => {
      if (!boxArr.includes(el)) {
        return el;
      }
      return acc;
    },
    0
  );

  /*
  Some notes:

  When using a reduce we need to loop over every item in the array until we reach the end.
  We can't prematurely break out of these iterations if a certain condition is reached.
  If we are optimising for that scenario, it would be faster to use a for or while loop,
  where we can stop iterating as soon as we found our match.

  E.g.:

  let guess = 0;

  const newArr = Array.from(
    { length: boxArr.length + 1 },
    (e, i) => boxArr.length + 1 - i
  );

  let len = newArr.length;

  while (len--) {
    if (!boxArr.includes(newArr[len])) {
      guess = newArr[len];
      break;
    }
  }

  In this specific use case, the array length can never be higher than 10,
  so the maximum number of iterations before the missing number is found is 9.
  As the number of potential loops is so low, I would opt for the functional programming style
  of a reduce as it is a bit more readable and no variables are mutated. In more complex scenarios
  a for or while loop can be faster.

*/
};

export { guessMissingNumber };
