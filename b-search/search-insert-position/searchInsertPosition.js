const searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right - 1) {
    let midpoint = Math.floor(left + (right - left) / 2);
    if (nums[midpoint] === target) { return midpoint }

    nums[midpoint] > target ? right = midpoint : left = midpoint;
  }

  if (nums[left] === target || nums[left] > target) { return left }
  if (nums[right] < target) { return right + 1}

  return right
};
