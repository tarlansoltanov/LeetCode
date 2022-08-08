# Author        : tarlansoltanov
# Title         : Peak Index in a Mountain Array
# ID            : 0852
# URL           : https://leetcode.com/problems/peak-index-in-a-mountain-array/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        start, middle, end, ans = 0, 0, len(arr) - 1, 0
        
        while start <= end:
            middle = (start + end) // 2
            
            if arr[middle] > arr[ans]:
                ans = middle
            
            if middle != 0 and arr[middle - 1] >= arr[middle]:
                end = middle - 1
            
            else:
                start = middle + 1
                
        return ans