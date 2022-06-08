# Author : tarlansoltanov
# Name : Remove Palindromic Subsequences
# ID : 1332
# Link : https://leetcode.com/problems/remove-palindromic-subsequences/
# Level : Easy
# Language : Python

class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return 1 if s == s[::-1] else 2