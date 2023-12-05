// Author        : tarlansoltanov
// Title         : Count of Matches in Tournament
// ID            : 1688
// URL           : https://leetcode.com/problems/count-of-matches-in-tournament/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
  int numberOfMatches(int n) {
    if(n == 1) return 0;
    return n % 2 ? numberOfMatches((n - 1) / 2 + 1) + (n - 1) / 2 : numberOfMatches(n / 2) + (n / 2);
  }
};