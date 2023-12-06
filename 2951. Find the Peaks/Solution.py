# Author        : tarlansoltanov
# Title         : Find the Peaks
# ID            : 2951
# URL           : https://leetcode.com/problems/find-the-peaks/
# Difficulty    : Easy
# Language      : Python


class Solution:
  def findPeaks(self, mountain: List[int]) -> List[int]:
    res = []

    for i in range(1, len(mountain) - 1):
      if mountain[i - 1] < mountain[i] > mountain[i + 1]:
        res.append(i)

    return res