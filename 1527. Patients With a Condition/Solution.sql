-- Author        : tarlansoltanov
-- Title         : Patients With a Condition
-- ID            : 1527
-- URL           : https://leetcode.com/problems/patients-with-a-condition/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT * FROM Patients WHERE conditions LIKE '% DIAB1%' OR conditions LIKE 'DIAB1%';