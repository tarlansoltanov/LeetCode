# Author        : tarlansoltanov
# Title         : Maximum 69 Number
# ID            : 1323
# URL           : https://leetcode.com/problems/maximum-69-number/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def maximum69Number (self, num: int) -> int:
        num1, n, k = num, 0, 0

        while num1 % 10 != 0:
            n += 1
            if num1 % 10 == 6:
                k = n
            num1 //= 10
        
        if k != 0:
            return (num // (10 ** k) * 10 + 9) * 10**(k-1) + num % 10**(k-1)

        return num