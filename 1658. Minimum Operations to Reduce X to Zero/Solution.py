# Author : tarlansoltanov
# Name : Minimum Operations to Reduce X to Zero
# ID : 1658
# Link : https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
# Level : Medium
# Language : Python

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        ans, nums_sum, n = -1, sum(nums), len(nums)
        
        if nums_sum == x:
            return n
        
        target, cur_sum, start = nums_sum - x, 0, 0
        
        for end in range(len(nums)):
            cur_sum += nums[end]
            while cur_sum >= target and start <= end:
                if cur_sum == target:
                    ans = min(ans, n - (end - start + 1)) if ans != -1  else n - (end - start + 1)
                    break
                
                cur_sum -= nums[start]
                start += 1
                
        return ans