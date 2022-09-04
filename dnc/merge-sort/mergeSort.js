import { combineSortedArrays } from './combineSortedArrays.js';


const mergeSort = (arr) => {
  if (arr.length < 2) { return arr }

  let midpoint = Math.floor(arr.length / 2);
  let leftSorted = mergeSort(arr.slice(0 , midpoint));
  let rightSorted = mergeSort(arr.slice(midpoint));

  return combineSortedArrays(leftSorted, rightSorted);
};

export { mergeSort };