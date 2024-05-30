#!/bin/bash

START=1

END=32

# In case there is a start value as input
if [ "$1" ]; then
    START=$1
fi

# In case there is an end value as input
if [ "$1" ]; then
    END=$2
fi

for ((i = $START; i <= $END; i++)); do
    echo "----- semaphore-$i -----"
    snarkjs zkey export verificationkey p0tion-artifacts/semaphorev4-${i}_final.zkey artifacts/${i}/semaphore.json
done
