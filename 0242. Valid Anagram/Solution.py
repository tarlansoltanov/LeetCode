# Author        : tarlansoltanov
# Title         : Valid Anagram
# ID            : 0242
# URL           : https://leetcode.com/problems/valid-anagram/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
            
        counts = {}

        for i in s:
            counts[i] = counts.get(i, 0) + 1

        for i in t:
            if counts.get(i, 0) == 0:
                return False
            counts[i] -= 1
        
        return True
        