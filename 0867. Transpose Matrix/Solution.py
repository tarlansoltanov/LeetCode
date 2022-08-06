# Author        : tarlansoltanov
# Title         : Transpose Matrix
# ID            : 0867
# URL           : https://leetcode.com/problems/transpose-matrix/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        return [list(row) for row in zip(*matrix)]