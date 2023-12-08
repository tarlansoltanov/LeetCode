// Author        : tarlansoltanov
// Title         : Construct String from Binary Tree
// ID            : 0606
// URL           : https://leetcode.com/problems/construct-string-from-binary-tree/
// Difficulty    : Easy
// Language      : C++


/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    string tree2str(TreeNode* root) {
        string res = to_string(root->val);
        if(root->left == nullptr && root->right == nullptr) return res;
        if(root->left == nullptr) return res + "()" + "(" + tree2str(root->right) + ")";
        if(root->right == nullptr) return res + "(" + tree2str(root->left) + ")";
        return res + "(" + tree2str(root->left) + ")" + "(" + tree2str(root->right) + ")";
    }
};