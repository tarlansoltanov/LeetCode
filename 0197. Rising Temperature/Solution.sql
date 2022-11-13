-- Author        : tarlansoltanov
-- Title         : Rising Temperature
-- ID            : 0197
-- URL           : https://leetcode.com/problems/rising-temperature/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT Weather2.id FROM Weather JOIN (SELECT * FROM Weather) Weather2 ON Weather.recordDate = SUBDATE(Weather2.recordDate, 1) WHERE Weather2.temperature > Weather.temperature;