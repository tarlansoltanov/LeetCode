# Author        : tarlansoltanov
# Title         : Remove All Adjacent Duplicates In String
# ID            : 1047
# URL           : https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def removeDuplicates(self, s: str) -> str:
        i, s = 0, list(s)
        while i < len(s) - 1:
            if s[i] == s[i+1]:
                s.pop(i)
                s.pop(i)
                i -= 2 if i > 0 else 1
            i += 1
        return ''.join(s)