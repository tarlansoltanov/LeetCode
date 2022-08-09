# Author        : tarlansoltanov
# Title         : Special Array With X Elements Greater Than or Equal X
# ID            : 1608
# URL           : https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums, count = sorted(nums), len(nums)
        
        start, end = 0, count - 1
        
        while start <= end:
            middle = (start + end) // 2
            
            ans = count - middle
            
            if ans <= nums[middle]:
                if middle == 0 or ans > nums[middle - 1]:
                    return ans
                end = middle - 1
            
            else:
                start = middle + 1
        
        return -1