-- Author        : tarlansoltanov
-- Title         : Big Countries
-- ID            : 0595
-- URL           : https://leetcode.com/problems/big-countries/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000;