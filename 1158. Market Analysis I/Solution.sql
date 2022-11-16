-- Author        : tarlansoltanov
-- Title         : Market Analysis I
-- ID            : 1158
-- URL           : https://leetcode.com/problems/market-analysis-i/
-- Difficulty    : Medium
-- Language      : SQL (MySQL)


SELECT user_id AS buyer_id, join_date, COUNT(order_id) AS orders_in_2019 FROM Users LEFT JOIN (SELECt * FROM Orders WHERE order_date BETWEEN '2019-01-01' AND '2020-01-01') Orders ON Users.user_id = Orders.buyer_id GROUP BY user_id;