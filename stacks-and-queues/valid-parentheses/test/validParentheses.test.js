import assert from 'assert';
import { isValid } from '../validParentheses.js';

describe('Test isValid function for parentheses String formatting', () => {
  it('Considers non-parentheses characters invalid', () => {
    const str = 'a';
    const validity = isValid(str);

    const desiredValidity = false;
    assert.equal(validity, desiredValidity);
  });

  it('Considers a string that is too long invalid', () => {
    const str = '---------------------------------------------------------------' +
      '---------------------------------------------';
    const validity = isValid(str);

    const desiredValidity = false;
    assert.equal(validity, desiredValidity);
  });

  it('Considers an empty string valid', () => {
    const str = '';
    const validity = isValid(str);

    const desiredValidity = true;
    assert.equal(validity, desiredValidity);
  });

  it('Considers a set of open-close parentheses valid', () => {
    const str = '()';
    const validity = isValid(str);

    const desiredValidity = true;
    assert.equal(validity, desiredValidity);
  });

  it('Considers multiple open-close parentheses valid', () => {
    const str = '()[]{}';
    const validity = isValid(str);

    const desiredValidity = true;
    assert.equal(validity, desiredValidity);
  });

  it('Considers non-matching parentheses invalid', () => {
    const str = '(]';
    const validity = isValid(str);

    const desiredValidity = false;
    assert.equal(validity, desiredValidity);
  });

  it('Considers out of order parentheses invalid', () => {
    const str = '[(])';
    const validity = isValid(str);

    const desiredValidity = false;
    assert.equal(validity, desiredValidity);
  });
});
