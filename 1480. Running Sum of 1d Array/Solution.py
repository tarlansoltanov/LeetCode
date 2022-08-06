# Author        : tarlansoltanov
# Title         : Running Sum of 1d Array
# ID            : 1480
# URL           : https://leetcode.com/problems/running-sum-of-1d-array/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        ans = []
        for i, item in enumerate(nums):
            ans.append(ans[i-1] + item if i !=0 else item)
        return ans