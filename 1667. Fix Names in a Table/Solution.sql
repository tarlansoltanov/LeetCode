-- Author        : tarlansoltanov
-- Title         : Fix Names in a Table
-- ID            : 1667
-- URL           : https://leetcode.com/problems/fix-names-in-a-table/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT user_id, CONCAT(UPPER(SUBSTRING(name, 1, 1)),LOWER(SUBSTRING(name, 2))) AS name FROM Users ORDER BY user_id ASC;