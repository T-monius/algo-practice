require 'minitest/autorun'
require_relative 'palindrome'

class PalindromeTest < Minitest::Test
  def test_the_letter_a
    word = 'a'
    result = is_palindrome?(word)
    assert(result)
  end

  def test_a_three_letter_palindrome
    word = 'aba'
    result = is_palindrome?(word)
    assert(result)
  end

  def test_a_four_letter_palindrome
    word = 'zaaz'
    result = is_palindrome?(word)
    assert(result)
  end

  def test_a_five_letter_palindrome
    word = 'zabaz'
    result = is_palindrome?(word)
    assert(result)
  end

  def test_a_non_palindrome
    word = 'zebra'
    result = is_palindrome?(word)
    refute(result)
  end
end
