-- Author        : tarlansoltanov
-- Title         : Customers Who Never Order
-- ID            : 0183
-- URL           : https://leetcode.com/problems/customers-who-never-order/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT name AS Customers FROM Customers WHERE id NOT IN(SELECT customerId FROM Orders);