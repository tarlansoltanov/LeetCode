-- Author        : tarlansoltanov
-- Title         : Calculate Special Bonus
-- ID            : 1873
-- URL           : https://leetcode.com/problems/calculate-special-bonus/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT employee_id, if(employee_id % 2 = 1 AND name NOT LIKE 'M%', salary, 0) AS bonus FROM Employees ORDER BY employee_id ASC;