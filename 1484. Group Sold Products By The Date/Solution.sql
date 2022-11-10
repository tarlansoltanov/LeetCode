-- Author        : tarlansoltanov
-- Title         : Group Sold Products By The Date
-- ID            : 1484
-- URL           : https://leetcode.com/problems/group-sold-products-by-the-date/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT DISTINCT sell_date, COUNT(product) AS num_sold, GROUP_CONCAT(product ORDER BY product, '') AS products FROM (SELECT DISTINCT * FROM Activities ORDER BY sell_date ASC) uniq GROUP BY sell_date;