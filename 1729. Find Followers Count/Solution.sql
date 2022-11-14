-- Author        : tarlansoltanov
-- Title         : Find Followers Count
-- ID            : 1729
-- URL           : https://leetcode.com/problems/find-followers-count/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT user_id, COUNT(follower_id) AS followers_count FROM Followers GROUP BY user_id ORDER BY user_id;