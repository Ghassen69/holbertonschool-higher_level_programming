#!/usr/bin/python3
"""zszmlmzl,dmzl,dmdzpopedoijp"""

import requests
from sys import argv

if __name__ == "__main__":
    print(requests.get(argv[1]).headers.get("X-Request-Id"))
