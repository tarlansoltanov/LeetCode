-- Author        : tarlansoltanov
-- Title         : Recyclable and Low Fat Products
-- ID            : 1757
-- URL           : https://leetcode.com/problems/recyclable-and-low-fat-products/
-- Difficulty    : Easy
-- Language      : SQL (MySQL)


SELECt product_id FROM Products WHERE low_fats = True AND recyclable = True;