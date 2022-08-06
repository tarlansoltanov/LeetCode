# Author        : tarlansoltanov
# Title         : N-Queens
# ID            : 0051
# URL           : https://leetcode.com/problems/n-queens/
# Difficulty    : Hard
# Language      : Python


from itertools import permutations
    
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        result = []
        rows = list(range(n))
        for cols in permutations(range(n)):
            first = set()
            second = set() 
            for (i, j) in zip(rows, cols):
                first.add(i - j)
                second.add(i + j)
            if len(first) == n and len(second) == n:
                result.append([j * '.' + 'Q' + (n - j - 1) * '.' for j in cols])
        return result