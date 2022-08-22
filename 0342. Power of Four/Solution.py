# Author        : tarlansoltanov
# Title         : Power of Four
# ID            : 0342
# URL           : https://leetcode.com/problems/power-of-four/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n == 1:
            return True
        return False if n % 4 != 0 or n == 0 else self.isPowerOfFour(n // 4)