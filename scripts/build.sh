#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Function to generate index.html
build_html() {
  echo "Generating index.html from index.md..."
  pandoc --toc -s --css "reset.css" --css "index.css" \
    -i "$SCRIPT_DIR/../index.md" -o "$SCRIPT_DIR/../public/index.html" --template="$SCRIPT_DIR/../template.html"
  
  if [ $? -eq 0 ]; then
    echo "public/index.html generated successfully."
  else
    echo "Error: Failed to generate public/index.html."
    exit 1
  fi
}

# Function to clean (remove index.html)
clean() {
  echo "Cleaning generated files..."
  rm -f "$SCRIPT_DIR/../public/index.html"
  
  if [ $? -eq 0 ]; then
    echo "public/index.html removed."
  else
    echo "Error: Failed to remove public/index.html."
    exit 1
  fi
}

# Parse command-line arguments
if [ "$1" == "clean" ]; then
  clean
else
  build_html
fi
