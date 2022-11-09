// Author        : tarlansoltanov
// Title         : Reverse Integer
// ID            : 0007
// URL           : https://leetcode.com/problems/reverse-integer/
// Difficulty    : Medium
// Language      : C++


class Solution {
public:
    long long reverse(long long x) {
        if(fabs(x) <= 9){
            return x;
        }

        long long flag = x / fabs(x), num = fabs(x), ans = 0;

        while(num > 0){
            if(ans > (pow(2, 31) - 1) / 10){
                return 0;
            }
            ans *= 10;
            ans += num % 10;
            num /= 10;
        }

        return flag * ans;
    }
};