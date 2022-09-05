const climbStairs = (nth_stair, memo={ '1':1, '2':2 }) => {
  if (!memo[String(nth_stair)]) {
    memo[String(nth_stair)] = climbStairs(nth_stair - 1) + climbStairs(nth_stair - 2);
  };

  return memo[nth_stair];
};

export { climbStairs };
