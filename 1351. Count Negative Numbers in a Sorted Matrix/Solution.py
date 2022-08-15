# Author        : tarlansoltanov
# Title         : Count Negative Numbers in a Sorted Matrix
# ID            : 1351
# URL           : https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        ans, m, n = 0, len(grid), len(grid[0])
        start, end = 0, n - 1
        
        for i in range(m - 1, -1, -1):
            k = n
            while start <= end:
                middle = (start + end) // 2
                
                if grid[i][middle] < 0:
                    k = middle
                    end = middle - 1
                
                else:
                    start = middle + 1
            
            ans += (n - k)
            start, end = k, n - 1
            
        return ans