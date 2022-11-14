-- Author        : tarlansoltanov
-- Title         : Customer Placing the Largest Number of Orders
-- ID            : 0586
-- URL           : https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT customer_number FROM Orders GROUP BY customer_number ORDER BY COUNT(order_number) DESC LIMIT 1;