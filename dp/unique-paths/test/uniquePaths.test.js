import assert from 'assert';
import { uniquePaths } from '../uniquePaths.js';

describe('Calculations from uniquePaths function', () => {
  it('Finds 1 path for a 2 x 1 grid.', () => {
    const m = 2;
    const n = 1;
    const possiblePaths = uniquePaths(m, n);

    assert.equal(possiblePaths, 1);
  });

  it('Finds 3 paths for a 3 x 2 grid.', () => {
    const m = 3;
    const n = 2;
    const possiblePaths = uniquePaths(m, n);

    assert.equal(possiblePaths, 3);
  });


  it('Finds 28 paths for a 3 x 7 grid.', () => {
    const m = 3;
    const n = 7;
    const possiblePaths = uniquePaths(m, n);

    assert.equal(possiblePaths, 28);
  });
});
