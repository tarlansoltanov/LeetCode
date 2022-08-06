// Author        : tarlansoltanov
// Title         : Remove Palindromic Subsequences
// ID            : 1332
// URL           : https://leetcode.com/problems/remove-palindromic-subsequences/
// Difficulty    : Easy
// Language      : Python


bool checkPalindrome(string str){
    int i = 0;
    int j = str.length() - 1;
    while(i < j){
        if(str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

class Solution {
public:
    int removePalindromeSub(string s) {
        return s.length() == 0 ? 0 : (checkPalindrome(s) ? 1 : 2);
    }
};