class Diamond
  SPACE = ' '
  FIRST_ALPHA = 'A'

  def self.make_diamond(input_letter)
    letter = FIRST_ALPHA
    og_offset = input_letter.ord - FIRST_ALPHA.ord
    rows = og_offset * 2
    diamond = ''

    0.upto(rows) do |idx|
      row = Diamond.make_row(letter, input_letter)
      diamond += row

      letter = idx < og_offset ? letter.next : (letter.ord - 1).chr
    end

    diamond
  end

  def self.make_row(letter, input_letter)
    offset_to_input_letter = input_letter.ord - letter.ord
    offset_to_first = letter.ord - FIRST_ALPHA.ord
    inner_spaces = letter == FIRST_ALPHA ? 0 : offset_to_first * 2 - 1
    outer_spaces = offset_to_input_letter

    if inner_spaces == 0
      row = "#{SPACE * outer_spaces}#{letter}#{SPACE * outer_spaces}\n"
    else
      row = "#{SPACE * outer_spaces}#{letter}#{SPACE * inner_spaces}" \
        "#{letter}#{SPACE * outer_spaces}\n"
    end

    row
  end
end
