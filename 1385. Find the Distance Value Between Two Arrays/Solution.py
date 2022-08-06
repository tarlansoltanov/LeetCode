# Author        : tarlansoltanov
# Title         : Find the Distance Value Between Two Arrays
# ID            : 1385
# URL           : https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        count = len(arr1)
        arr2 = sorted(arr2)
        
        for i in arr1:
            start, end = 0, len(arr2) - 1
            
            while start <= end:
                middle = (start + end) // 2
                
                if abs(i - arr2[middle]) <= d:
                    count -= 1
                    break
                
                if i < arr2[middle]:
                    end = middle - 1
                    
                else:
                    start = middle + 1
                    
        return count