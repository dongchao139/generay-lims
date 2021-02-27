#!/bin/sh

echo $1
if [ $# -gt 1 ] ; then
docker build -t generay-lims:$1 -t  generay-lims:latest  .
else
docker build -t  generay-lims:latest  .
fi
