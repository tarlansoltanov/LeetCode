# Author        : tarlansoltanov
# Title         : Merge Sorted Array
# ID            : 0088
# URL           : https://leetcode.com/problems/merge-sorted-array/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if not (nums1 and nums2):
            return
            
        rem = []
        
        ni = 0
        for i, item in enumerate(nums1):
            if len(nums2) == ni:
                if i >= m or item > rem[0]:
                    nums1[i] = rem[0]
                    del rem[0]
                    if i < m:
                        rem.append(item)
                continue
            
            if not rem:
                if i >= m or item > nums2[ni]:
                    nums1[i] = nums2[ni]
                    ni += 1
                    if i < m:
                        rem.append(item)
                continue
            
            mi = min(rem[0], item, nums2[ni]) if i < m else min(rem[0], nums2[ni])
            
            if mi == rem[0]:
                if i < m:
                    rem.append(item)
                nums1[i] = rem[0]
                del rem[0]
                continue
            
            if mi == nums2[ni]:
                if i < m:
                    rem.append(item)
                nums1[i] = nums2[ni]
                ni += 1