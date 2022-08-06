# Author        : tarlansoltanov
# Title         : Valid Perfect Square
# ID            : 0367
# URL           : https://leetcode.com/problems/valid-perfect-square/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        return (num ** 0.5) % 1 == 0
        