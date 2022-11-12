-- Author        : tarlansoltanov
-- Title         : Customer Who Visited but Did Not Make Any Transactions
-- ID            : 1581
-- URL           : https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT customer_id, COUNT(visit_id) AS count_no_trans FROM Visits WHERE visit_id NOT IN (SELECT visit_id FROM Transactions) GROUP BY customer_id;