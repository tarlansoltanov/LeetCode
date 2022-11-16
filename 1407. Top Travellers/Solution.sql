-- Author        : tarlansoltanov
-- Title         : Top Travellers
-- ID            : 1407
-- URL           : https://leetcode.com/problems/top-travellers/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT U.name AS name, if(COUNT(R.distance) = 0, 0, SUM(R.distance)) AS travelled_distance FROM Users AS U LEFT JOIN Rides AS R ON U.id = R.user_id GROUP BY U.id ORDER BY travelled_distance DESC, name ASC;