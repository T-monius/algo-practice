import assert from 'assert';
import { combineSortedArrays } from '../combineSortedArrays.js';

describe('Testing the combineSortedArrays function', () => {
  it('should combine two sorted arrays in sorted order', () => {
    const desiredSortedArray = [1, 2, 3, 7, 9, 14]
    const desiredString = JSON.stringify(desiredSortedArray);

    const exArr = desiredSortedArray.slice(0, 3);
    const exArrOne = desiredSortedArray.slice(3);
    const resultCombination = combineSortedArrays(exArr, exArrOne);
    const resultString = JSON.stringify(resultCombination);

    // console.log(`      resultCombination: ${resultCombination}`);
    assert.equal(resultString, desiredString);
  });
});
