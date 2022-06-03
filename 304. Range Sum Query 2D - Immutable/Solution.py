# Author : tarlansoltanov
# Name : Range Sum Query 2D - Immutable
# ID : 304
# Link : https://leetcode.com/problems/range-sum-query-2d-immutable/
# Level : Medium
# Language : Python

class NumMatrix:
    matrix = [] 
    
    def __init__(self, matrix: List[List[int]]):
        self.matrix = matrix
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                self.matrix[i][j] += (matrix[i-1][j] if i else 0) + (matrix[i][j-1] if j else 0) - (matrix[i-1][j-1] if j and i else 0)



    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        rem = 0 + (self.matrix[row2][col1-1] if col1 else 0) + (self.matrix[row1-1][col2] if row1 else 0) - (self.matrix[row1-1][col1-1] if col1 and row1 else 0)
        return self.matrix[row2][col2] - rem