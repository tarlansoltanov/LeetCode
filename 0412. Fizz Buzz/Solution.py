# Author        : tarlansoltanov
# Title         : Fizz Buzz
# ID            : 0412
# URL           : https://leetcode.com/problems/fizz-buzz/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        ans = []
        for i in range(1, n+1):
            ans.append(str(i))
            
            if i % 3 == 0:
                ans[i - 1] = "Fizz"
                
            if i % 5 == 0:
                if i % 3 == 0:
                    ans[i - 1] += "Buzz"
                    continue
                ans[i - 1] = "Buzz"
            
        return ans