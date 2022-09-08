const uniquePaths = (m, n, currentPosition={x:0,y:0}, cache={}) => {
  const val = cache[JSON.stringify(currentPosition)];
  if (val) { return val }

  const isAdjacentToEnd = currentPosition.x + 1 === m - 1 || currentPosition.y + 1 === n - 1;
  if (isAdjacentToEnd) {
    cache[JSON.stringify(currentPosition)] = 1;
    return 1;
  };
};

export { uniquePaths };
