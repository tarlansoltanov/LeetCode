# Author        : tarlansoltanov
# Title         : Number of Steps to Reduce a Number to Zero
# ID            : 1342
# URL           : https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def numberOfSteps(self, num: int) -> int:
        if num == 0:
            return 0
        return 1 + self.numberOfSteps(num // 2) if num % 2 == 0 else 1 + self.numberOfSteps(num - 1)