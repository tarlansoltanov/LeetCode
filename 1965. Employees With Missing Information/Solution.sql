-- Author        : tarlansoltanov
-- Title         : Employees With Missing Information
-- ID            : 1965
-- URL           : https://leetcode.com/problems/employees-with-missing-information/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT employee_id FROM Employees WHERE employee_id NOT IN (SELECT employee_id FROM Salaries)
UNION
SELECT employee_id FROM Salaries WHERE employee_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY employee_id;