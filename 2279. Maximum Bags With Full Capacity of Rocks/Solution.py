# Author        : tarlansoltanov
# Title         : Maximum Bags With Full Capacity of Rocks
# ID            : 2279
# URL           : https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/
# Difficulty    : Medium
# Language      : Python


class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        arr = [(i - j) for i,j in zip(capacity, rocks)]
        arr = sorted(arr)
        ans = 0
        for i in arr:
            if i == 0:
                ans += 1
                continue
            if additionalRocks - i >= 0:
                additionalRocks -= i
                ans += 1
        return ans