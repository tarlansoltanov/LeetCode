# Author : tarlansoltanov
# Name : Two Sum II - Input Array Is Sorted
# ID : 167
# Link : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
# Level : Medium
# Language : Python

def indexOf(numbers: List[int], target: int) -> int:
    n = len(numbers)
    if n < 2:
        return - 1 if not n or (numbers[0] != target) else 0

    middle = (len(numbers)-1) // 2

    if numbers[middle] > target:
        index = indexOf(numbers[:middle], target)
        return index if index != -1 else -1

    if numbers[middle] < target:
        index = indexOf(numbers[middle+1::], target)
        return index + middle + 1 if index != -1 else -1

    return middle
    

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for i in range(len(numbers)):
            index = indexOf(numbers[i+1::], target - numbers[i])
            if index != -1:
                return [i+1, index+i+2]