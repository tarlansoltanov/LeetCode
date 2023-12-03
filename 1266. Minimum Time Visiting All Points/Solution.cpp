// Author        : tarlansoltanov
// Title         : Minimum Time Visiting All Points
// ID            : 1266
// URL           : https://leetcode.com/problems/minimum-time-visiting-all-points/
// Difficulty    : Easy
// Language      : C++


class Solution
{
public:
    int minTimeToVisitAllPoints(vector<vector<int>> &points)
    {
        int result = 0;

        for (int i = 0; i < points.size() - 1; i++)
        {
            result += max(abs(points[i][0] - points[i + 1][0]), abs(points[i][1] - points[i + 1][1]));
        }

        return result;
    }
};