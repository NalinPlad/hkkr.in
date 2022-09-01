#!/bin/bash
echo 'Removing old builds..'
rm BUILD.zip
echo 'Zipping..'
zip -r BUILD.zip src/ package.json -x "*/\.*" -q
echo 'done => AWS-BUILD.zip'
