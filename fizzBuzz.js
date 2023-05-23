const fizzBuzz = (x) => {
    if (x % 3 === 0 ) {
        return "Fizz";
    } else if (x % 5 === 0 ) {
        return "Buzz";
    }
};

module.exports = fizzBuzz