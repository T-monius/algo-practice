# permutations.rb

def permute(nums)
  results = []
  backtrack(nums, [], results)
  results
end

def backtrack(nums, candidate_permutation, results)
  if candidate_permutation.size == nums.size
    results << candidate_permutation.dup
  end

  nums.each do |num|
    next if candidate_permutation.include?(num)
    candidate_permutation << num
    backtrack(nums, candidate_permutation, results)
    candidate_permutation.pop
  end

  nil
end
