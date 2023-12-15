# Author        : tarlansoltanov
# Title         : Destination City
# ID            : 1436
# URL           : https://leetcode.com/problems/destination-city/
# Difficulty    : Easy
# Language      : Python


class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        cities = {}

        for a, b in paths:
            cities[a] = 1 + cities.get(a, 0)
            cities[b] = 0 + cities.get(b, 0)

        for key in cities.keys():
            if cities[key] == 0:
                return key