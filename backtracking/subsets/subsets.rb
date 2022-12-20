def subsets(nums)
  results = []
  backtrack(nums, results, []) # add cache param?
  results
end

def backtrack(nums, results, subset)
  return if subset.size > nums.size

  sorted_subset = subset.sort
  unless results.include?(sorted_subset)
    results << sorted_subset
  end

  nums.each do |num|
    next if subset.include?(num)

    subset << num
    backtrack(nums, results, subset)
    subset.pop
  end
end
