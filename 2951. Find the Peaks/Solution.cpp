// Author        : tarlansoltanov
// Title         : Find the Peaks
// ID            : 2951
// URL           : https://leetcode.com/problems/find-the-peaks/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    vector<int> findPeaks(vector<int>& mountain) {
        vector<int> result;
        
        for(int i = 1; i < mountain.size() - 1; i++){
            if(mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
                result.push_back(i);
        }
        
        return result;
    }
};