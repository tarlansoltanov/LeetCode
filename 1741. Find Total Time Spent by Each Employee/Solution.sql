-- Author        : tarlansoltanov
-- Title         : Find Total Time Spent by Each Employee
-- ID            : 1741
-- URL           : https://leetcode.com/problems/find-total-time-spent-by-each-employee/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT event_day AS day, emp_id, SUM(out_time - in_time) AS total_time FROM Employees GROUP BY emp_id, day;