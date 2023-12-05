# Author        : tarlansoltanov
# Title         : Count of Matches in Tournament
# ID            : 1688
# URL           : https://leetcode.com/problems/count-of-matches-in-tournament/
# Difficulty    : Easy
# Language      : Python


class Solution:
  def numberOfMatches(self, n: int) -> int:
    return 0 if n == 1 else int(self.numberOfMatches((n - 1) / 2 + 1) + (n - 1) / 2) if n % 2 else int(self.numberOfMatches(n / 2) + n / 2)
