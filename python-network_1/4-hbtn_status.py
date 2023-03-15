#!/usr/bin/python3
"""ezezez
;ml;ml;m
aepea^p
pp"""

import requests

if __name__ == "__main__":
    content = requests.get("https://intranet.hbtn.io/status").text
    print("Body response:")
    print("\t- type: {}".format(type(content)))
    print("\t- content: {}".format(content))
