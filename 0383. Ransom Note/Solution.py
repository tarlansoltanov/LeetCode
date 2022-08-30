# Author        : tarlansoltanov
# Title         : Ransom Note
# ID            : 0383
# URL           : https://leetcode.com/problems/ransom-note/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False
        return not Counter(ransomNote) - Counter(magazine)