# three_sum.rb

# Brute Force

def three_sum(nums)
  nums_sorted = nums.sort
  seen = {}
  triplets = []

  0.upto(nums_sorted.length) do |i|
    (i + 1).upto(nums_sorted.length - 1) do |j|
      (j + 1).upto(nums_sorted.length - 1) do |k|
        candidate = [nums_sorted[i], nums_sorted[j], nums_sorted[k]]
        if candidate.sum == 0
          unless seen[candidate]
            seen[candidate]= true
            triplets << candidate
          end
        end
      end
    end
  end

  triplets
end
