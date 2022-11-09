-- Author        : tarlansoltanov
-- Title         : Swap Salary
-- ID            : 0627
-- URL           : https://leetcode.com/problems/swap-salary/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


UPDATE Salary SET sex = if(sex = 'm', 'f', 'm');