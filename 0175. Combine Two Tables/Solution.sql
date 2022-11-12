-- Author        : tarlansoltanov
-- Title         : Combine Two Tables
-- ID            : 0175
-- URL           : https://leetcode.com/problems/combine-two-tables/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECT Person.firstName AS firstName, Person.lastName AS lastName, Address.city AS city, Address.state AS state FROM Person LEFT JOIN Address ON Person.personId = Address.personId;