const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round both numbers and return their sum', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round and add when only the second number is a decimal', () => {
    assert.strictEqual(calculateNumber(2, 3.6), 6);
    assert.strictEqual(calculateNumber(2, 3.4), 5);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.2), -5);
  });
});
