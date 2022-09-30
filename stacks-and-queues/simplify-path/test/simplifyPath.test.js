import assert from 'assert';
import { simplifyPath } from '../simplifyPath.js';

describe('The simplifyPath function', () => {
  it('Does not allow trailing slashes', () => {
    const unixLikePath = '/home/';
    const canonicalLikePath = simplifyPath(unixLikePath);

    assert.equal(canonicalLikePath, '/home');
  });

  it('Does not include double periods (dir ref)', () => {
    const unixLikePath = '/../';
    const canonicalLikePath = simplifyPath(unixLikePath);

    assert.equal(canonicalLikePath, '/');
  });

  it('Disallows multiple consecutive slashes', () => {
    const unixLikePath = '/home//foo/';
    const canonicalLikePath = simplifyPath(unixLikePath);

    assert.equal(canonicalLikePath, '/home/foo');
  })

  it('Treats more than two consecutive periods as a name', () => {
    const unixLikePath = '/.../'
    const canonicalLikePath = simplifyPath(unixLikePath);

    assert.equal(canonicalLikePath, '/...');
  });

  it('Drops elements of path that lead up to directory reference', () => {
    const unixLikePath = "/a/./b/../../c/";
    const canonicalLikePath = simplifyPath(unixLikePath);

    assert.equal(canonicalLikePath, "/c");
  });

  it('Drops elements of path that lead up to directory reference', () => {
    const unixLikePath = "/a/../../b/../c//.//";
    const canonicalLikePath = simplifyPath(unixLikePath);

    assert.equal(canonicalLikePath, "/c");
  });
});
