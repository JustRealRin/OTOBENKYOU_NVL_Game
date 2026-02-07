#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -f "${SCRIPT_DIR}/index.html" ]; then
    echo "ERROR : file does not exist !"
    exit 1
fi

if command -v xdg-open > /dev/null 2>&1; then
    xdg-open "${SCRIPT_DIR}/index.html"
    echo "LOADING..."
else
    echo "ERROR : xdg-open"
    echo "Try : sudo apt-get install xdg-utils"
    exit 1
fi

