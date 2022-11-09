// Author        : tarlansoltanov
// Title         : Maximum 69 Number
// ID            : 1323
// URL           : https://leetcode.com/problems/maximum-69-number/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    int maximum69Number (int num) {
        int n = 0, k = 0, num1 = num, ans;
        while (num1 % 10 != 0) {
            n++;
            if (num1 % 10 == 6) {
            k = n;
            }
            num1 /= 10;
        }
        if (k != 0) {
            ans = (int(num / pow(10, k)) * 10 + 9) * pow(10, k - 1) + num % int(pow(10, k - 1));
        }
        else{
            ans = num;
        }
        return ans;
    }
};