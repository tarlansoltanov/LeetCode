// Author        : tarlansoltanov
// Title         : Largest Odd Number in String
// ID            : 1903
// URL           : https://leetcode.com/problems/largest-odd-number-in-string/
// Difficulty    : Easy
// Language      : C++


class Solution
{
    public:
        string largestOddNumber(string num)
        {
            int n = num.length();

            while(n--)
                if (num[n] == '1' || num[n] == '3' || num[n] == '5' || num[n] == '7' || num[n] == '9')
                    return num.substr(0, n + 1);

            return "";
        }
};