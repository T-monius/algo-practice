const findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1  < right) {
    let midpoint = Math.floor(left + (right - left)/2);

    if ( nums[midpoint + 1] < nums[midpoint] ) {
      return nums[midpoint + 1];
    }
    if ( nums[midpoint] > nums[right] ) {
      left = midpoint;
    } else {
      right = midpoint;
    }
  }

  const minVal = nums[left] < nums[right] ? nums[left] : nums[right] ;

  return minVal;
};
