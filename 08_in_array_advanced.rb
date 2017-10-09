# In Array Advanced
#
# Don't use any array helper methods except for .each
#
# This is the same as yesterday's challenge with one improvement.
# in_array_advanced takes an additional boolean argument 'strict'.
# If strict is true, in_array should care about leTteR CasIng.
# If strict is false, in_array should return true for any match.
#
# Difficulty:
# 4/10
#
# Example:
# in_array("HeLLo", ["hi", "howdy", "HeLLo"], true) should return true
# in_array("DrAkE", ["jayz", "kanye", "drake"], false) should return true
# in_array("DrAkE", ["jayz", "kanye", "yachty"], false) should return flse
#
# Check your solution by running the tests:
# ruby tests/08_in_array_advanced_test.rb
#

def in_array_advanced (needle, haystack, strict)
  if strict
    haystack.each do |compare|
      if compare == needle
        @result = true
      elsif compare != needle
        @result = false
      end
    end
    @result
  else
    haystack.each do |compare|
      down_compare = compare.downcase
      down_needle = needle.downcase
      if down_compare == down_needle
        @result = true
      elsif down_compare != down_needle
        @result = false
      end
    end
    @result
  end
end
