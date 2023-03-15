#!/usr/bin/python3
"""
Python script that lists 10 commits (from the most recent to oldest) of the
repository "rails" by the user "rails".
"""
import requests
from sys import argv

if __name__ == "__main__":
    repo_name = argv[1]
    user_name = argv[2]
    url = "https://api.github.com/repos/" + user_name + "/" + repo_name \
          + "/commits?per_page=10"
    response_obj = requests.get(url)
    commits = response_obj.json()
    for commit in commits:
        sha = commit.get("sha")
        author_name = commit.get("commit").get("author").get("name")
        print(f"{sha}: {author_name}")
