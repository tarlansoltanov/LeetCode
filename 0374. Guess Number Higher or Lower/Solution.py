# Author        : tarlansoltanov
# Title         : Guess Number Higher or Lower
# ID            : 0374
# URL           : https://leetcode.com/problems/guess-number-higher-or-lower/
# Difficulty    : Easy
# Language      : Python


# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        left, right = 0, n
        
        while left != right:
            middle = (right + left) // 2 + (right + left) % 2
            
            ans = guess(middle)
            
            if ans == 0:
                return middle
            
            if ans == -1:
                right = middle
            
            else:
                left = middle
