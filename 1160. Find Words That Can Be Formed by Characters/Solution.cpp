// Author        : tarlansoltanov
// Title         : Find Words That Can Be Formed by Characters
// ID            : 1160
// URL           : https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int counts[26] = {};

        for(auto c : chars)
            counts[c - 'a']++;

        int result = 0;

        for (string word : words) {
            int word_counts[26] = {};
            bool flag = true;

            for (auto c : word) {
                if(counts[c - 'a'] < ++word_counts[c - 'a']){
                    flag = false;
                    break;
                }
            }

            result += flag ? word.size() : 0;
        }

        return result;
    }
};