# Author        : tarlansoltanov
# Title         : Find First and Last Position of Element in Sorted Array
# ID            : 0034
# URL           : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        ans, start, end = [-1, -1], 0, len(nums) - 1
        
        while start <= end:
            middle = (start + end) // 2
            
            if ans[0] == -1:
                if nums[middle] == target and (middle == 0 or nums[middle - 1] < target):
                    ans[0] = middle
                    start = middle
                    end = len(nums) - 1
                
                elif nums[middle] < target:
                    start = middle + 1
                
                else:
                    end = middle - 1
            
            else:
                ans[1] = middle if nums[middle] == target else ans[1]
                    
                if nums[middle] <= target:
                    start = middle + 1
                
                else:
                    end = middle - 1
                
        return ans