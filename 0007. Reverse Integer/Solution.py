# Author        : tarlansoltanov
# Title         : Reverse Integer
# ID            : 0007
# URL           : https://leetcode.com/problems/reverse-integer/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def reverse(self, x: int) -> int:
        if abs(x) <= 9:
            return x
        flag = x // abs(x)
        x, ans  = abs(x), 0
        while x > 0:
            ans *= 10
            ans += x % 10
            x //= 10
        if ans > 2**31 - 1:
            return 0
        return flag * ans