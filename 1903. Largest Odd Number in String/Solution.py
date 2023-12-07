# Author        : tarlansoltanov
# Title         : Largest Odd Number in String
# ID            : 1903
# URL           : https://leetcode.com/problems/largest-odd-number-in-string/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 == 1:
                return num[0:i+1]
        return ""
        