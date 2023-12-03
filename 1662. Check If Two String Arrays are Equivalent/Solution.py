# Author        : tarlansoltanov
# Title         : Check If Two String Arrays are Equivalent
# ID            : 1662
# URL           : https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return ''.join(word1) == ''.join(word2)
