// Author        : tarlansoltanov
// Title         : Middle of the Linked List
// ID            : 0876
// URL           : https://leetcode.com/problems/middle-of-the-linked-list/
// Difficulty    : Easy
// Language      : C++


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* first = head;
        ListNode* second = head;
        
        while(first->next){
            if(!first->next->next){
                return second->next;
            }
            
            first = first->next->next;
            second = second->next;
        }
        
        return second;
    }
};