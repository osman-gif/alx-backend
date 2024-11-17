#!/usr/bin/python3
"""
Create a class FIFOCache that inherits from BaseCaching and is a caching
system:

    You must use self.cache_data - dictionary from the parent class
    BaseCaching
    You can overload def __init__(self): but don’t forget to call the parent
    init: super().__init__()
    def put(self, key, item):
        Must assign to the dictionary self.cache_data the item value for the
        key key.
        If key or item is None, this method should not do anything.
        If the number of items in self.cache_data is higher that
        BaseCaching.MAX_ITEMS:
            you must discard the first item put in cache (FIFO algorithm)
            you must print DISCARD: with the key discarded and following
            by a new line
    def get(self, key):
        Must return the value in self.cache_data linked to key.
        If key is None or if the key doesn’t exist in self.cache_data,
        return None.

"""


from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    FIFOCache class
    """
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """
        Add an item in the cache
        """

        if key is not None and item is not None:
            keys = []

            keys = list(self.cache_data.keys())
            if len(keys) >= self.MAX_ITEMS:
                if key not in list(self.cache_data.keys()):
                    del self.cache_data[keys[0]]
                    print(f"DISCARD: ", (keys[0]))
            self.cache_data[key] = item

    def get(self, key):
        """
        Get an item by key
        """

        if key is not None:
            if key not in self.cache_data.keys():
                return None
            else:
                return self.cache_data[key]
        else:
            return None
