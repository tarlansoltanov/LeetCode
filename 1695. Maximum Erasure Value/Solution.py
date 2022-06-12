# Author : tarlansoltanov
# Name : Maximum Erasure Value
# ID : 1695
# Link : https://leetcode.com/problems/maximum-erasure-value/
# Level : Medium
# Language : Python

class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        ans, start, cur_sum, elem = 0, 0, 0, {}
        for end in range(len(nums)):
            cur_sum += nums[end]
            
            while start <= end and elem.get(nums[end]) != None:
                elem.pop(nums[start])
                cur_sum -= nums[start]
                start += 1
                
            elem[nums[end]] = end
                
            ans = max(ans, cur_sum)
            
        return ans