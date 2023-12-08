# Author        : tarlansoltanov
# Title         : Construct String from Binary Tree
# ID            : 0606
# URL           : https://leetcode.com/problems/construct-string-from-binary-tree/
# Difficulty    : Easy
# Language      : Python


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        if root.left is None and root.right is None:
            return f"{root.val}"
        return f"{root.val}{f'({self.tree2str(root.left)})' if root.left else '()'}{f'({self.tree2str(root.right)})' if root.right else ''}"
        