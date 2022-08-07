# Author        : tarlansoltanov
# Title         : Sqrt(x)
# ID            : 69
# URL           : https://leetcode.com/problems/sqrtx/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def mySqrt(self, x: int) -> int:
        ans, start, end = 0, 1, x
        
        while start <= end:
            middle = (start + end) // 2
            
            if middle * middle == x:
                return middle
            
            elif middle * middle < x:
                ans = middle
                start = middle + 1
                
            else:
                end = middle - 1
            
        return ans