# Author        : tarlansoltanov
# Title         : Remove Palindromic Subsequences
# ID            : 1332
# URL           : https://leetcode.com/problems/remove-palindromic-subsequences/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return 1 if s == s[::-1] else 2