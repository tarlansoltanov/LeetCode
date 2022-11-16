-- Author        : tarlansoltanov
-- Title         : Sales Analysis III
-- ID            : 1084
-- URL           : https://leetcode.com/problems/sales-analysis-iii/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT product_id, product_name FROM Product WHERE product_id NOT IN (SELECT product_id FROM Sales WHERE sale_date NOT BETWEEN '2019-01-01' AND '2019-04-01') AND product_id IN (SELECT product_id FROM Sales);