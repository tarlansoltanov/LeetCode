-- Author        : tarlansoltanov
-- Title         : Duplicate Emails
-- ID            : 0182
-- URL           : https://leetcode.com/problems/duplicate-emails/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT email AS Email FROM Person GROUP BY email HAVING COUNT(id) > 1;