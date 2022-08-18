# Author        : tarlansoltanov
# Title         : Search a 2D Matrix
# ID            : 0074
# URL           : https://leetcode.com/problems/search-a-2d-matrix/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        start, end = 0, m * n - 1
        
        while start <= end:
            middle = (start + end) // 2
            
            k = matrix[middle // n][middle % n]
            
            if k == target:
                return True
            
            elif k < target:
                start = middle + 1
            
            else:
                end = middle - 1
            
        return False