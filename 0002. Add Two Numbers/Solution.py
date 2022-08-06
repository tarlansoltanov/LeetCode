# Author        : tarlansoltanov
# Title         : Add Two Numbers
# ID            : 0002
# URL           : https://leetcode.com/problems/add-two-numbers/
# Difficulty    : Medium
# Language      : Python


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head, prev, cur = None, None, None
        rem = 0
        while l1 or l2:
            cur = ListNode()
            cur.val += l1.val if l1 else 0
            cur.val += l2.val if l2 else 0
            cur.val += rem
            
            rem = cur.val // 10
            cur.val %= 10
            
            if prev:
                prev.next = cur
            else:
                head = cur
            prev = cur
            
            l1 = l1.next if l1 else l1
            l2 = l2.next if l2 else l2
            
        if rem:
            prev.next = ListNode(rem)
            
        return head