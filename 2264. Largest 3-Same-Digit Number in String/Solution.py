# Author        : tarlansoltanov
# Title         : Largest 3-Same-Digit Number in String
# ID            : 2264
# URL           : https://leetcode.com/problems/largest-3-same-digit-number-in-string/
# Difficulty    : Easy
# Language      : Python


class Solution:
  def largestGoodInteger(self, num: str) -> str:
    result = ""

    for i in range(len(num) - 2):
      if num[i] == num[i+1] == num[i+2]:
        if result == "" or result[0] < num[i]:
          result = num[i] * 3 
    
    return result