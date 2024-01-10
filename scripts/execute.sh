#!/bin/bash

echo "----- Remove build folder -----"
./scripts/removeBuildFolder.sh

echo "----- Sudoku -----"
echo "----- Sudoku Groth16 -----"
./scripts/executeGroth16.sh sudoku 13
echo "----- Sudoku Plonk -----"
./scripts/executePlonk.sh sudoku 15
echo "----- Sudoku Fflonk -----"
./scripts/executeFflonk.sh sudoku 18

