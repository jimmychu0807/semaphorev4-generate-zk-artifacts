#!/bin/bash

START=1

END=3

# In case there is a start value as input
if [ "$1" ]; then
    START=$1
fi

# In case there is an end value as input
if [ "$1" ]; then
    END=$2
fi

echo "----- Remove build folder -----"
./scripts/removeBuildFolder.sh

for ((i = $START; i <= $END; i++)); do
    echo "----- semaphore-$i -----"
    ./scripts/executeGroth16.sh semaphore-$i 14
done
