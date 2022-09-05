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

  it('Finds three ways to third stair', () => {
    const n = 3;
    const ways_to_stair = climbStairs(n);

    assert.equal(ways_to_stair, 3);
  });

  it('Finds 233 ways to twelfth stair', () => {
    const n = 12;
    const ways_to_stair = climbStairs(n);

    assert.equal(ways_to_stair, 233);
  });

  it('Finds 14930352 ways to the 35th stair', () => {
    const n = 35;
    const ways_to_stair = climbStairs(n);

    assert.equal(ways_to_stair, 14930352);
  });
});
