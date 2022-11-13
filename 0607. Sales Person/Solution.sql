-- Author        : tarlansoltanov
-- Title         : Sales Person
-- ID            : 0607
-- URL           : https://leetcode.com/problems/sales-person/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT name FROM SalesPerson WHERE sales_id NOT IN (SELECT sales_id FROM Orders WHERE com_id IN (SELECT com_id FROM Company WHERE name = 'RED'));