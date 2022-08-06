# Author        : tarlansoltanov
# Title         : Search Insert Position
# ID            : 0035
# URL           : https://leetcode.com/problems/search-insert-position/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        start, middle, end = 0, 0, len(nums) - 1
        
        while start <= end:
            middle = (start + end) // 2
            
            if nums[middle] == target:
                return middle
            
            if nums[middle] > target:
                end = middle - 1
            
            else:
                start = middle + 1
                
        return start     