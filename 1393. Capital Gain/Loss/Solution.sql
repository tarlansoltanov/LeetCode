-- Author        : tarlansoltanov
-- Title         : Capital Gain/Loss
-- ID            : 1393
-- URL           : https://leetcode.com/problems/capital-gainloss/
-- Difficulty    : Medium
-- Language      : SQL (MySQL)


SELECT stock_name, 
SUM(
    CASE 
        WHEN operation = 'BUY' THEN -price
        WHEN operation = 'SELL' THEN price
    END
) AS capital_gain_loss
FROM Stocks GROUP BY stock_name;