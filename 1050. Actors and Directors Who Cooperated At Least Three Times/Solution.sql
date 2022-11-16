-- Author        : tarlansoltanov
-- Title         : Actors and Directors Who Cooperated At Least Three Times
-- ID            : 1050
-- URL           : https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT actor_id, director_id FROM ActorDirector GROUP BY actor_id, director_id HAVING COUNT(timestamp) > 2;