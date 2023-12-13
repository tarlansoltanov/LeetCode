# Author        : tarlansoltanov
# Title         : Special Positions in a Binary Matrix
# ID            : 1582
# URL           : https://leetcode.com/problems/special-positions-in-a-binary-matrix/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        rows, cols = [0] * len(mat), [0] * len(mat[0])

        for i in range(len(mat)):
            for j in range(len(mat[i])):
                if(mat[i][j]):
                    rows[i] += 1
                    cols[j] += 1
        
        result = 0

        for i in range(len(rows)):
            for j in range(len(cols)):
                if(mat[i][j] and rows[i] == 1 and cols[j] == 1): 
                    result += 1
        
        return result