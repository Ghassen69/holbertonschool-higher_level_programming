#!/usr/bin/python3
"""
Fetches the ID of a GitHub user using their authentication credentials.
"""
import requests
import sys

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    response = requests.get("https://api.github.com/user",
                            auth=(username, password))
    json_response = response.json()
    try:
        print(json_response['id'])
    except KeyError:
        print('None')
