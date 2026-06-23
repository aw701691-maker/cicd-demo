const { add, multiply } = require('./app');

test('add function works', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiply function works', () => {
  expect(multiply(3, 4)).toBe(12);
});