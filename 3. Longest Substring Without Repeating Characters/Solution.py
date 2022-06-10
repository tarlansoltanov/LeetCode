# Author : tarlansoltanov
# Name : Longest Substring Without Repeating Characters
# ID : 3
# Link : https://leetcode.com/problems/longest-substring-without-repeating-characters/
# Level : Medium
# Language : Python

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        count, ans = 0, 0

        elem = {}

        i = 0
        while i < len(s):
            if elem.get(s[i]) is None:
                elem[s[i]] = i
                count += 1
            else:
                ans = max(ans, count)
                i = elem[s[i]]
                elem = {}
                count = 0
            i += 1

        return max(ans, count)