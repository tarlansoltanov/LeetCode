# Author        : tarlansoltanov
# Title         : Reverse Words in a String
# ID            : 0151
# URL           : https://leetcode.com/problems/reverse-words-in-a-string/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def reverseWords(self, s: str) -> str:
        words = [i.strip() for i in s.strip().split(' ') if i != '']
        return ' '.join(reversed(words))