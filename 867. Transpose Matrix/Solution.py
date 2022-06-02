# Author : tarlansoltanov
# Name : Transpose Matrix
# ID : 867
# Link : https://leetcode.com/problems/transpose-matrix/
# Level : Easy
# Language : Python

class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        return [list(row) for row in zip(*matrix)]