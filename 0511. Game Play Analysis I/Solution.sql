-- Author        : tarlansoltanov
-- Title         : Game Play Analysis I
-- ID            : 0511
-- URL           : https://leetcode.com/problems/game-play-analysis-i/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT player_id, MIN(event_date) AS first_login FROM Activity GROUP BY player_id;