# Author        : tarlansoltanov
# Title         : Maximum Product of Two Elements in an Array
# ID            : 1464
# URL           : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort()
        return (nums[-1]-1)*(nums[-2]-1)