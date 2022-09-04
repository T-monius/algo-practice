import assert from 'assert';
import { mergeSort } from '../mergeSort.js';
import { combineSortedArrays } from '../combineSortedArrays.js';

describe("Testing the mergeSort function.", () => {
  const unsortedArray = [3, 1, 7, 9, 2, 14]
  const desiredSortedArray = [1, 2, 3, 7, 9, 14]

  it("should properly sort a single element array.", () => {
    const resultOfSingleSort = mergeSort([1]);
    const singleString = JSON.stringify(resultOfSingleSort);
    const desiredSingle = JSON.stringify([1]);

    assert.equal(singleString, desiredSingle);

  });

  it("Should properly sort a multiple element array.", () => {
    const resultOfSort = mergeSort(unsortedArray);
    const resultStr = JSON.stringify(resultOfSort);
    const desiredString = JSON.stringify(desiredSortedArray);

    assert.equal(resultStr, desiredString);
  });
});
