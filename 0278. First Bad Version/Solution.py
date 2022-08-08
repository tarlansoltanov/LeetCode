# Author        : tarlansoltanov
# Title         : First Bad Version
# ID            : 0278
# URL           : https://leetcode.com/problems/first-bad-version/
# Difficulty    : Easy
# Language      : Python


# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        ans, start, end = 0, 0, n
        
        while start <= end:
            middle = (start + end) // 2
            
            if isBadVersion(middle):
                ans = middle
                end = middle - 1
            
            else:
                start = middle + 1
            
        return ans