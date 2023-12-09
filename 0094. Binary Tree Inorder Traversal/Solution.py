# Author        : tarlansoltanov
# Title         : Binary Tree Inorder Traversal
# ID            : 0094
# URL           : https://leetcode.com/problems/binary-tree-inorder-traversal/
# Difficulty    : Easy
# Language      : Python


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def explore(node: Optional[TreeNode]):
            if node is None:
                return
            explore(node.left)
            res.append(node.val)
            explore(node.right)

        explore(root)
        return res

