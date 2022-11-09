-- Author        : tarlansoltanov
-- Title         : Find Customer Referee
-- ID            : 0584
-- URL           : https://leetcode.com/problems/find-customer-referee/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT name FROM Customer WHERE referee_id != 2 OR referee_id is null;