import { readFileSync, writeFileSync } from "fs"

const vkeys = JSON.parse(readFileSync(`./verification-keys.json`, "utf8"))

const contractVkPoints = []

let tempResult

for (let i = 0; i < vkeys.vk_delta_2.length; i+=1) {
    tempResult = []
    for (let j = 0; j < vkeys.vk_delta_2[i].length-1; j+=1) {
        tempResult.push(... vkeys.vk_delta_2[i][j].slice().reverse())
    }
    for (let j = 0; j < vkeys.IC[i].length; j+=1) {
        tempResult.push(... vkeys.IC[i][j].slice(0, -1))
    }
    contractVkPoints.push(tempResult)
}

const textResult = JSON.stringify(contractVkPoints, null, 4)

// Remove quotes from numbers
const result = textResult.replace(/"/g, '')

writeFileSync("./contract-verification-keys.json", result)
