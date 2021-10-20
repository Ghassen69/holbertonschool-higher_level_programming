#!/bin/bash
# displays the value of the 'Content-Length' response header
curl -sI "$1" | grep Content-Length | cut -d' ' -f2
