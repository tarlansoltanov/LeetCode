# Author        : tarlansoltanov
# Title         : Richest Customer Wealth
# ID            : 1672
# URL           : https://leetcode.com/problems/richest-customer-wealth/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        ans = 0
        for i in accounts:
            ans = max(ans, sum(i))
        return ans