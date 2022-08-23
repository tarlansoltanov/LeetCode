# Author        : tarlansoltanov
# Title         : Palindrome Linked List
# ID            : 0234
# URL           : https://leetcode.com/problems/palindrome-linked-list/
# Difficulty    : Easy
# Language      : Python


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverse(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        middle = current
        end = None
        
        while current:
            middle = end
            end = ListNode(current.val, middle)
            current = current.next
        
        return end
    
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        end = self.reverse(head)
        while head:
            if head.val != end.val:
                return False
            head, end = head.next, end.next
        return True
        