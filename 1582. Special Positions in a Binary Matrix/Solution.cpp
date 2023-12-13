// Author        : tarlansoltanov
// Title         : Special Positions in a Binary Matrix
// ID            : 1582
// URL           : https://leetcode.com/problems/special-positions-in-a-binary-matrix/
// Difficulty    : Easy
// Language      : C++


class Solution {
public:
    int numSpecial(vector<vector<int>>& mat) {
        vector<int> rows(mat.size(), 0), cols(mat[0].size());
        int result = 0;
        for(int i = 0; i < mat.size(); i++){
            for(int j = 0; j < mat[i].size(); j++){
                if(mat[i][j]){
                    cols[j]++;
                    rows[i]++;
                }
            }
        }
        for(int i = 0; i < rows.size(); i++){
            for(int j = 0; j < cols.size(); j++){
                if(mat[i][j] && cols[j] == 1 && rows[i] == 1) result++;
            }
        }
        return result;
    }
};