#!/bin/bash
#post arg2 to api arg1
curl -s POST -H "Content-Type: application/json" -d $(cat "$2") "$1"
