// Author        : tarlansoltanov
// Title         : Element Appearing More Than 25% In Sorted Array
// ID            : 1287
// URL           : https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int count = 1, n = arr.size();
        float k = n / 4.0;

        for(int i = 1; i < n; i++){
            if(arr[i] == arr[i - 1]){
                count++;
            } else {
                count = 1;
            }
            if(count > k) return arr[i];
        }

        return arr[0];
    }
};