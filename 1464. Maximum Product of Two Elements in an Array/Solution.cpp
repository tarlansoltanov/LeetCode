// Author        : tarlansoltanov
// Title         : Maximum Product of Two Elements in an Array
// ID            : 1464
// URL           : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int max1 = nums[0], max2 = nums[1];

        for(int i = 1; i < nums.size(); i++){
            if(nums[i] >= max1){
                max2 = max1;
                max1 = nums[i];
            }
            else if(nums[i] > max2) max2 = nums[i];
        }

        return (max1 - 1) * (max2 - 1);
    }
};