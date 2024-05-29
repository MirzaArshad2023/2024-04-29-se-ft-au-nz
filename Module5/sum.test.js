// Unit test - stored in square.test.js
// First we import the square function
const { square } = require('./sum');
// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
test('square 5 to get 25', () => {
    expect(square(5)).toBe(25);
});
// ++ Try creating a second function in square.js called
// squareRoot, then test that too!