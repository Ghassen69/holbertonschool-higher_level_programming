#!/usr/bin/python3
"""display the body of the response"""

from urllib import request, error
from sys import argv

if __name__ == "__main__":
    try:
        with request.urlopen(argv[1]) as rd:
            print(rd.read().decode('utf-8'))
    except error.HTTPError as rr:
        print("Error code: {}".format(rr.code))
