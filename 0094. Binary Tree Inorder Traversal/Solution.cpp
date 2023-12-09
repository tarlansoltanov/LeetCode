// Author        : tarlansoltanov
// Title         : Binary Tree Inorder Traversal
// ID            : 0094
// URL           : https://leetcode.com/problems/binary-tree-inorder-traversal/
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
    vector<int> inorderTraversal(TreeNode* root) {
        if(root == nullptr) return {};
        
        vector<int> res = {}, l, r;
        
        if(root->left != nullptr){
            l = inorderTraversal(root->left);
            res.insert(res.end(), l.begin(), l.end());
        }

        res.push_back(root->val);

        if(root->right != nullptr){
            r = inorderTraversal(root->right);
            res.insert(res.end(), r.begin(), r.end());
        }

        return res;
    }
};