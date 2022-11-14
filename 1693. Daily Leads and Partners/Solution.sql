-- Author        : tarlansoltanov
-- Title         : Daily Leads and Partners
-- ID            : 1693
-- URL           : https://leetcode.com/problems/daily-leads-and-partners/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT date_id, make_name, COUNT(DISTINCT lead_id) AS unique_leads, COUNT(DISTINCT partner_id) AS unique_partners FROM DailySales GROUP BY date_id, make_name;