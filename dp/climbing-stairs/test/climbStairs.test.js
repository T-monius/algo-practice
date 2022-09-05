import assert from 'assert';
import { climbStairs } from '../climbStairs.js';

describe('Test the climbStairs function for finding ways to stair `n`.', () => {
  it('Finds one way to a single stair', () => {
    const n = 1;
    const ways_to_stair = climbStairs(n);

    assert.equal(ways_to_stair, 1);
  });

  it('Finds two ways to a pair of stairs', () => {
    const n = 2;
    const ways_to_stair = climbStairs(n);

    assert.equal(ways_to_stair, 2);
  });
});
