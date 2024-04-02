const { add } = require('../src/mocks/add');

describe('Tests inside of test-action', () => {
  test('2 + 2 is 4', async () => {
    expect(add(2,2)).toBe(4);
  });

  test('2 + 2 is 4', async () => {
    expect(add(2,3)).toBe(4);
  });

  test('2 + 2 is 5', async () => {
    expect(add(2,6)).toBe(5);
  });
});