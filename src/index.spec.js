const test = require('ava');
const { fizzBuzz } = require('./index');

test('If number is 1 return 1', (t) => {
  // Prepare
  const number = 1;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 2 return 2', (t) => {
  // Prepare
  const number = 2;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 3 return Fizz', (t) => {
  // Prepare
  const number = 3;
  const expected = 'Fizz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 4 return 4', (t) => {
  // Prepare
  const number = 4;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 5 return Buzz', (t) => {
  // Prepare
  const number = 5;
  const expected = 'Buzz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 6 return Fizz', (t) => {
  // Prepare
  const number = 6;
  const expected = 'Fizz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 7 return 7', (t) => {
  // Prepare
  const number = 7;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 8 return 8', (t) => {
  // Prepare
  const number = 8;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 9 return Fizz', (t) => {
  // Prepare
  const number = 9;
  const expected = 'Fizz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 10 return Buzz', (t) => {
  // Prepare
  const number = 10;
  const expected = 'Buzz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 11 return 11', (t) => {
  // Prepare
  const number = 11;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 12 return Fizz', (t) => {
  // Prepare
  const number = 12;
  const expected = 'Fizz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 13 return 13', (t) => {
  // Prepare
  const number = 13;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 14 return 14', (t) => {
  // Prepare
  const number = 14;
  const expected = number;

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});

test('If number is 15 return Fizz Buzz', (t) => {
  // Prepare
  const number = 15;
  const expected = 'Fizz Buzz';

  // Execute
  const result = fizzBuzz(number);

  // Assert
  t.is(result, expected, `Not return ${expected}`);
});
