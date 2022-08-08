# Author        : tarlansoltanov
# Title         : Arranging Coins
# ID            : 0441
# URL           : https://leetcode.com/problems/arranging-coins/
# Difficulty    : Easy
# Language      : Python

class Solution:
    def arrangeCoins(self, n: int) -> int:
        ans, start, end = 0, 1, n
        
        while start <= end:
            middle = (start + end) // 2
            
            k = (middle + 1 + (middle % 2)) * (middle // 2) + (middle % 2)
            
            if k == n:
                return middle
            
            elif k < n:
                ans = middle
                start = middle + 1
            
            else:
                end = middle - 1
            
        return ans
