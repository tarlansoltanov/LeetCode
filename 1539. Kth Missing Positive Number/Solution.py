# Author        : tarlansoltanov
# Title         : Kth Missing Positive Number
# ID            : 1539
# URL           : https://leetcode.com/problems/kth-missing-positive-number/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        n = len(arr)
        kt = arr[-1] - n
        
        if kt < k:
            return k + n
        
        start, end = 0, n - 1
        
        while start <= end:
            middle = (start + end) // 2
            
            kt = arr[middle] - middle - 1
            
            if kt < k:
                start = middle + 1
            
            else:
                end = middle - 1
        
        if kt < k:
            return k + middle + 1
        
        return arr[middle] - kt + k - 1