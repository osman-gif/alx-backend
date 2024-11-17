#!/usr/bin/python3

from base_caching import BaseCaching


class LIFOCache(BaseCaching):

    def __init__(self):
        super().__init__()

    def put(self, key, item):

        if key is not None and item is not None:
            keys = list(self.cache_data.keys())
            if len(self.cache_data.items()) >= self.MAX_ITEMS:
                if key not in self.cache_data.keys():
                    print(f"DISCARD: ", (keys[-1]))
                    del self.cache_data[keys[-1]]
                else:
                    del self.cache_data[key]
                    self.cache_data[key] = item
            self.cache_data[key] = item

    def get(self, key):
        if key is not None:
            if key not in self.cache_data.keys():
                return None
            else:
                return self.cache_data[key]
        else:
            return None
