# Author : tarlansoltanov
# Name : Intersection of Two Linked Lists
# ID : 160
# Link : https://leetcode.com/problems/intersection-of-two-linked-lists/
# Level : Easy
# Language : Python

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
        

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        nodes = set()
        
        while headA != None:
            nodes.add(headA)
            headA = headA.next
            
        while headB != None:
            if headB in nodes:
                return headB
            headB = headB.next
            
        return None