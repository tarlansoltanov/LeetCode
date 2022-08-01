# Author : tarlansoltanov
# Name : Two Sum II - Input Array Is Sorted
# ID : 0167
# Link : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
# Level : Medium
# Language : Python

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i, j = 0, len(numbers)-1

        while i < j:
            rem = target - (numbers[i] + numbers[j])
            
            if rem == 0:
                return [i+1, j+1]
            
            print(i, j)
            
            i += (rem > 0)
            j -= (rem < 0)