const combineSortedArrays = (arr, arrOne) => {
  let combinedArr = [];
  let idx = 0;
  let idxOne = 0;

  while (idx < arr.length && idxOne < arrOne.length) {
    let val = arr[idx];
    let valOne = arrOne[idxOne];

    if (val <= valOne) {
      combinedArr.push(val);
      idx += 1;
    } else {
      combinedArr.push(valOne);
      idxOne += 1;
    }
  };

  if (idx < arr.length) {
    combinedArr = combinedArr.concat(arr.slice(idx));
  }
  if (idxOne < arrOne.length) {
    combinedArr = combinedArr.concat(arrOne.slice(idxOne));
  }

  return combinedArr;
};

export { combineSortedArrays };
