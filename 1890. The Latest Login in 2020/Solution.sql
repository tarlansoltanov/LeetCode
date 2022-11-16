-- Author        : tarlansoltanov
-- Title         : The Latest Login in 2020
-- ID            : 1890
-- URL           : https://leetcode.com/problems/the-latest-login-in-2020/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT user_id, MAX(time_stamp) AS last_stamp FROM Logins WHERE time_stamp BETWEEN '2020-01-01' AND '2021-01-01' GROUP BY user_id;