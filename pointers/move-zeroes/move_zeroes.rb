def move_zeroes(nums)
  w, r = [0, 0]

  loop do
    break if r >= nums.size

    num = nums[r]
    nums[w] = num and w += 1 unless num == 0

    r += 1
  end

  loop do
    break if w >= nums.size

    nums[w] = 0
    w += 1
  end

  nums
end
