# Author : tarlansoltanov
# Name : Valid Perfect Square
# ID : 367
# Link : https://leetcode.com/problems/valid-perfect-square/
# Level : Easy
# Language : Python

class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        return (num ** 0.5) % 1 == 0
        