#!/bin/bash
#displays the body of the response.
curl --silent "$1" | wc --bytes
