const uniquePaths = (m, n, currentPosition={x:0,y:0}, cache={}) => {
  const coordinates = JSON.stringify(currentPosition);
  if (cache[coordinates]) { return cache[coordinates] };

  const isAdjacentToEnd = currentPosition.x === m - 1 || currentPosition.y === n - 1;
  if (isAdjacentToEnd) {
    cache[coordinates] = 1;
    return 1;
  };

  const rightNeighbor = { x: currentPosition.x + 1, y: currentPosition.y };
  const neighborBelow = { x: currentPosition.x, y: currentPosition.y + 1 };
  let possiblePaths = uniquePaths(m, n, rightNeighbor, cache) + uniquePaths(m, n, neighborBelow, cache);

  cache[coordinates] = possiblePaths

  return possiblePaths;
};

export { uniquePaths };
