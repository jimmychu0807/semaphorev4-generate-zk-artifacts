#!/bin/bash

END=3

# In case there is a circuit name as input
if [ "$1" ]; then
    END=$1
fi

echo "----- Remove build folder -----"
./scripts/removeBuildFolder.sh

for i in $(seq "$END"); do
    echo "----- semaphore-$i -----"
    ./scripts/executeGroth16.sh semaphore-$i 14
done
