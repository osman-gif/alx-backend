#!/usr/bin/python3
"""
Create a class LRUCache that inherits from BaseCaching and is a caching
system:
"""

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """
    LRUCache class
    """

    def __init__(self):
        """
        init function
        """
        super().__init__()
        self.lru = []

    def put(self, key, item):
        """
        Add an item in the cache, if adding same item twice, it will update
        """
        if key is not None and item is not None:

            if len(self.cache_data.items()) >= self.MAX_ITEMS:
                removed = self.lru.pop(0)
                if key not in self.cache_data.keys():
                    del self.cache_data[removed]
                    print("DISCARD:", removed)
            self.lru.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """
        Get an item by key
        """
        if key is not None:
            if key not in self.cache_data.keys():
                return None
            else:
                self.lru.remove(key)
                self.lru.append(key)
                return self.cache_data[key]
        else:
            return None
