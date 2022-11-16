-- Author        : tarlansoltanov
-- Title         : Bank Account Summary II
-- ID            : 1587
-- URL           : https://leetcode.com/problems/bank-account-summary-ii/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT name, SUM(amount) AS balance FROM Users AS U JOIN Transactions AS T ON U.account = T.account GROUP BY U.account HAVING SUM(amount) > 10000;