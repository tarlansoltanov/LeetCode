# Author        : tarlansoltanov
# Title         : N-Queens II
# ID            : 0052
# URL           : https://leetcode.com/problems/n-queens-ii/
# Difficulty    : Hard
# Language      : Python


class Solution:
    def totalNQueens(self, n: int) -> int:
        count = 0
        rows = list(range(n))
        for cols in permutations(range(n)):
            first = set()
            second = set()
            for (i, j) in zip(rows, cols):
                first.add(i - j)
                second.add(i + j)
            if len(first) == n and len(second) == n: 
                count += 1
        
        return count