-- Author        : tarlansoltanov
-- Title         : Tree Node
-- ID            : 0608
-- URL           : https://leetcode.com/problems/tree-node/
-- Difficulty    : Medium
-- Language      : SQL (MySQL)


SELECT id, if(p_id is NULL, 'Root', if(id IN (SELECT p_id FROM Tree), 'Inner', 'Leaf')) AS type FROM Tree;