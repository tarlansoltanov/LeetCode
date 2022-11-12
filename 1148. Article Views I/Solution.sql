-- Author        : tarlansoltanov
-- Title         : Article Views I
-- ID            : 1148
-- URL           : https://leetcode.com/problems/article-views-i/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT DISTINCT author_id AS id FROM Views WHERE author_id = viewer_id ORDER BY author_id;