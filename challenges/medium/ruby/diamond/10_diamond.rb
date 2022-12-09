SPACE = ' '
FIRST_ALPHA = 'A'

class Diamond
  def self.make_diamond(letter)
    current_letter = FIRST_ALPHA
    og_offset = letter.ord - FIRST_ALPHA.ord
    iterations = og_offset * 2 + 1
    diamond = ''
    idx = 0

    while idx < iterations
      offset_to_input_letter = letter.ord - current_letter.ord
      offset_to_first = current_letter.ord - FIRST_ALPHA.ord
      inner_spaces = current_letter == FIRST_ALPHA ? 0 : offset_to_first * 2 - 1
      outer_spaces = offset_to_input_letter

      if inner_spaces == 0
        row = "#{SPACE * outer_spaces}" \
          "#{current_letter}" \
          "#{SPACE * outer_spaces}\n"
      else
        row = "#{SPACE * outer_spaces}" \
          "#{current_letter}" \
          "#{SPACE * inner_spaces}" \
          "#{current_letter}" \
          "#{SPACE * outer_spaces}\n"
      end

      diamond += row

      if idx < og_offset
        current_letter = current_letter.next
      else
        current_letter = (current_letter.ord - 1).chr
      end

      idx += 1
    end

    diamond
  end
end
