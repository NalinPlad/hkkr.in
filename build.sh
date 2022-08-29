#!/bin/bash
echo 'Removing old builds..'
rm AWS-BUILD.zip
echo 'Zipping..'
zip -r AWS-BUILD.zip src/ -x "*/\.*" -q
echo 'done => AWS-BUILD.zip'
