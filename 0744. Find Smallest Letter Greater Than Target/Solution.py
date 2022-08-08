# Author        : tarlansoltanov
# Title         : Find Smallest Letter Greater Than Target
# ID            : 744
# URL           : https://leetcode.com/problems/find-smallest-letter-greater-than-target/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        ans = ""
        
        start, end = 0, len(letters) - 1
        
        while start <= end:
            middle = (start + end) // 2
            
            if letters[middle] > target:
                ans = letters[middle]
                end = middle - 1
                
            else:
                start = middle + 1
            
        return ans if ans != "" else letters[0]