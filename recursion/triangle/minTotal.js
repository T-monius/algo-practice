const minimumTotal = function(triangle, row=0, col=0) {
  const currentVal = triangle[row][col];
  if (!triangle[row + 1]) { return currentVal }

  const nextRowSameCol = minimumTotal(triangle, row + 1, col);
  const nextRowNextCol = minimumTotal(triangle, row + 1, col + 1);
  const min = nextRowSameCol < nextRowNextCol ? nextRowSameCol : nextRowNextCol;

  return currentVal + min;
};
