# Author        : tarlansoltanov
# Title         : Two Sum
# ID            : 0001
# URL           : https://leetcode.com/problems/two-sum/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            k = target - nums[i]
            if k in nums and nums.index(k) != i:
                return [i, nums.index(k)]