# Author : tarlansoltanov
# Name : Unique Paths
# ID : 0062
# Link : https://leetcode.com/problems/unique-paths/
# Level : Medium
# Language : Python

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        fac = lambda num : 1 if num <= 1 else num*fac(num-1)
        return fac(m+n-2)//(fac(m-1)*fac(n-1))