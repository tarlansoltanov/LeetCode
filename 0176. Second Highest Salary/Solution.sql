-- Author        : tarlansoltanov
-- Title         : Second Highest Salary
-- ID            : 0176
-- URL           : https://leetcode.com/problems/second-highest-salary/
-- Difficulty    : Medium
-- Language      : SQL (MySQL)


SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary NOT IN (SELECT MAX(salary) FROM Employee);