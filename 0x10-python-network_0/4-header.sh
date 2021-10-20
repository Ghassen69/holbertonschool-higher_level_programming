#!/bin/bash
# sends GET request with custom header and displays the response body
curl -sH "X-HolbertonSchool-User-Id: 98" "$1"
