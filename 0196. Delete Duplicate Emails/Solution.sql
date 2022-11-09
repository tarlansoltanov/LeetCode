-- Author        : tarlansoltanov
-- Title         : Delete Duplicate Emails
-- ID            : 0196
-- URL           : https://leetcode.com/problems/delete-duplicate-emails/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


DELETE FROM Person 
WHERE id NOT IN (SELECT id FROM (SELECT min(id) AS id FROM Person GROUP BY email) uniq);