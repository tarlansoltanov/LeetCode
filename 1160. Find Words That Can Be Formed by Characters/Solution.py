# Author        : tarlansoltanov
# Title         : Find Words That Can Be Formed by Characters
# ID            : 1160
# URL           : https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        result = 0

        for word in words:
            flag = True

            for c in word:
                if word.count(c) > chars.count(c):
                    flag = False
                    break
            
            result += len(word) if flag else 0
        
        return result