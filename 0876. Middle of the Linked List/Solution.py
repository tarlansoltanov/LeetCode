# Author        : tarlansoltanov
# Title         : Middle of the Linked List
# ID            : 0876
# URL           : https://leetcode.com/problems/middle-of-the-linked-list/
# Difficulty    : Easy
# Language      : Python


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        first, second = head, head
        
        while first.next:
            if first.next.next is None:
                return second.next
            
            first, second = first.next.next, second.next
            
        return second