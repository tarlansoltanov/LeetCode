# Author : tarlansoltanov
# Name : Transpose Matrix
# ID : 867
# Link : https://leetcode.com/problems/transpose-matrix/
# Level : Easy
# Language : Python

class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        return [[matrix[i][j] for i in range(len(matrix))] for j in range(len(matrix[0]))]