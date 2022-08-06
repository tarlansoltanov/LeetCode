// Author        : tarlansoltanov
// Title         : Running Sum of 1d Array
// ID            : 1480
// URL           : https://leetcode.com/problems/running-sum-of-1d-array/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for(int i = 0; i < nums.size(); i++){
            nums[i] = i == 0 ? nums[i] : nums[i] + nums[i-1];
        }
        
        return nums;
    }
};