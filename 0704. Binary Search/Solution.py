# Author : tarlansoltanov
# Name : Binary Search
# ID : 0704
# Link : https://leetcode.com/problems/binary-search/
# Level : Easy
# Language : Python

class Solution:
    def search(self, numbers: List[int], target: int) -> int:
        n = len(numbers)
        if n < 2:
            return - 1 if not n or (numbers[0] != target) else 0

        middle = (len(numbers)-1) // 2

        if numbers[middle] > target:
            index = self.search(numbers[:middle], target)
            return index if index != -1 else -1

        if numbers[middle] < target:
            index = self.search(numbers[middle+1:], target)
            return index + middle + 1 if index != -1 else -1

        return middle