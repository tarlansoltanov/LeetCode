# Author : tarlansoltanov
# Name : Triangle
# ID : 120
# Link : https://leetcode.com/problems/triangle/
# Level : Medium
# Language : Python

class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        for i in range(len(triangle)-2, -1, -1):
            for j in range(i+1):
                triangle[i][j] += min(triangle[i+1][j:j+2])
        return triangle[0][0]