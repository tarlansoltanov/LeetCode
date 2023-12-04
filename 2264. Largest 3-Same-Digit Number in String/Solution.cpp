// Author        : tarlansoltanov
// Title         : Largest 3-Same-Digit Number in String
// ID            : 2264
// URL           : https://leetcode.com/problems/largest-3-same-digit-number-in-string/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    string largestGoodInteger(string num) {
        string result = "";
        int max = -1;
        
        for(int i = 0; i <= num.length() - 3; i++){
          if(num[i] == num[i+1] && num[i] == num[i+2]){
            if((int)num[i] > max){
              max = (int)num[i];
              result = num.substr(i, 3);
            }
          }
        }

        return result;
    }
};