#!/bin/bash

# Run make to generate index.html
make index.html

mkdir -p public
mv index.html public/index.html
