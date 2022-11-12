# Author        : tarlansoltanov
# Title         : Find Median from Data Stream
# ID            : 0295
# URL           : https://leetcode.com/problems/find-median-from-data-stream/
# Difficulty    : Hard
# Language      : Python


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()

class MedianFinder:

    def __init__(self):
        self.nums = []

    def addNum(self, num: int) -> None:
        left, right = 0, len(self.nums) - 1
        middle = (left + right) // 2

        while left <= right:
            if self.nums[middle] < num:
                left = middle + 1
            
            if self.nums[middle] > num:
                right = middle - 1

            if self.nums[middle] == num:
                break
            
            middle = (left + right) // 2
        
        self.nums.insert(middle + 1, num)

    def findMedian(self) -> float:
        l = len(self.nums)
        return self.nums[l//2] if l % 2 == 1 else (self.nums[l//2 - 1] + self.nums[l//2]) / 2