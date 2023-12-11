# Author        : tarlansoltanov
# Title         : Element Appearing More Than 25% In Sorted Array
# ID            : 1287
# URL           : https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        count, k, n = 0, -1, len(arr)
        for i in range(n):
            if arr[i] != k:
                k = arr[i]
                count = 0
            count += 1

            if count > n / 4:
                return k

        return arr[0]