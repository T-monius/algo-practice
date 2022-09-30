const countConsecutivePeriods = (path, idx) => {
  let count = 0;
  let char = path[idx];

  while (char === '.') {
    count += 1;
    idx += 1;
    char = path[idx];
  };

  return count;
};

const pushPeriodsToStack = (periodCount, stack) => {
  for(let count = 0; count < periodCount; count += 1) {
    stack.push('.');
  };
};

const simplifyPath = (path) => {
  const stack = [];
  let idx = 0;

  while (idx < path.length) {
    const char = path[idx];

    if (char === '/') {
      const lastCharOnStack = stack[stack.length - 1];

      if(lastCharOnStack !== '/' && idx !== path.length - 1) { stack.push(char) };
    } else if (char === '.') {
      const periodCount = countConsecutivePeriods(path, idx);

      if (periodCount > 2) { pushPeriodsToStack(periodCount, stack) };
      idx += periodCount;
      continue;
    } else {
      stack.push(char);
    };

    idx += 1;
  };

  return stack.join('');
};

export { simplifyPath };
