# Author        : tarlansoltanov
# Title         : Plus One
# ID            : 0066
# URL           : https://leetcode.com/problems/plus-one/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits) - 1, -1, -1):
            digits[i] += 1
            if digits[i] == 10:
                digits[i] = 0
                continue
            return digits
        
        if digits[0] == 0:
            digits.insert(0,1)
        
        return digits