# Author        : tarlansoltanov
# Title         : Calculate Money in Leetcode Bank
# ID            : 1716
# URL           : https://leetcode.com/problems/calculate-money-in-leetcode-bank/
# Difficulty    : Easy
# Language      : Python


class Solution:
  def totalMoney(self, n: int) -> int:
    k, res = 0, 0

    while n > 0:
      n, k, res = n - 1, k + 1, res + k + 1

      for i in range(6):
        if n == 0: return res
        res += k + i + 1
        n -= 1
      

    return res