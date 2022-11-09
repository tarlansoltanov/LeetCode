# Author        : tarlansoltanov
# Title         : Online Stock Span
# ID            : 0901
# URL           : https://leetcode.com/problems/online-stock-span/
# Difficulty    : Medium
# Language      : Python


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)


class StockSpanner:

    def __init__(self):
        self.prices = []
        self.spans = []
        

    def next(self, price: int) -> int:
        self.prices.append(price)
        
        self.spans.append(1)

        i = len(self.prices) - 2

        while i >= 0:
            if self.prices[i] <= price:
                self.spans[-1] += self.spans[i]
                i -= self.spans[i]
            else:
                break

        return self.spans[-1]