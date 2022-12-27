# palindrome.rb

def is_palindrome?(str)
  start_pointer = 0
  end_pointer = str.size - 1
  palindrome_helper(str, start_pointer, end_pointer)
end

def palindrome_helper(str, start_pointer, end_pointer)
  return true if start_pointer > end_pointer || str.size == 1
  return false unless str[start_pointer] == str[end_pointer]

  result = palindrome_helper(str, start_pointer + 1, end_pointer - 1)

  return result
end
