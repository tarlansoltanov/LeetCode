# Author        : tarlansoltanov
# Title         : Remove Duplicates from Sorted Array
# ID            : 0026
# URL           : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums) - 1:
            if nums[i] == nums[i+1]:
                nums.pop(i)
                i -= 1
            i += 1
        return len(nums)