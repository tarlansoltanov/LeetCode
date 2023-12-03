// Author        : tarlansoltanov
// Title         : Check If Two String Arrays are Equivalent
// ID            : 1662
// URL           : https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        vector<int> c1 = {0, 0}, c2 = {0, 0};
        bool flag = false;

        while(true){
            if(word1[c1[0]][c1[1]] != word2[c2[0]][c2[1]]) return false;

            c1[1]++; c2[1]++;

            if(c1[1] == word1[c1[0]].length()) {
                if(c1[0] == word1.size() - 1) flag = true;
                c1[0]++; 
                c1[1] = 0;
            }
            if(c2[1] == word2[c2[0]].length()) {
                if(c2[0] == word2.size() - 1) return flag;
                c2[0]++; 
                c2[1] = 0;
            }
            if(flag) return false;
        }
    }
};