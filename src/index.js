const checkFizz = (number) => {
  return (number % 3 === 0);
};

const checkBuzz = (number) => {
  return (number % 5 === 0);
};

const fizzBuzz = (number) => {
  if (checkFizz(number) && checkBuzz(number)) {
    return 'Fizz Buzz';
  }

  if (checkFizz(number)) {
    return 'Fizz';
  }

  if (checkBuzz(number)) {
    return 'Buzz';
  }

  return number;
};

module.exports = { fizzBuzz };
