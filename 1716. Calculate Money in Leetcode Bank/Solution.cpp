// Author        : tarlansoltanov
// Title         : Calculate Money in Leetcode Bank
// ID            : 1716
// URL           : https://leetcode.com/problems/calculate-money-in-leetcode-bank/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    int totalMoney(int n) {
        int k = 0, t = 0, res = 0;
        while(n--){
          res += ++k;
          t = k;
          for(int i = 0; i < 6; i++){
            if(n == 0) return res;
            res += ++t;
            n--;
          }
        }
        return res;
    }
};