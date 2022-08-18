# Author        : tarlansoltanov
# Title         : Reduce Array Size to The Half
# ID            : 1338
# URL           : https://leetcode.com/problems/reduce-array-size-to-the-half/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        target = len(arr) // 2
        
        counts = {}
        
        for i in arr:
            counts[i] = counts.get(i, 0) + 1

        counts = sorted(counts.values(), reverse=True)
        
        ans = 0
        
        for i in range(len(counts)):
            ans += counts[i]
            
            if ans >= target:
                return i + 1