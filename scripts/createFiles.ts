import { mkdirSync, writeFileSync } from "fs"
import { createCircuitCode, createInput } from "./utils/generateText"

if (process.argv.length === 4) {
    const start = Number(process.argv[2])
    const end = Number(process.argv[3])

    for (let i = start; i <= end; i += 1) {
        mkdirSync(`./circuits/semaphore-${i}`, { recursive: true })
        writeFileSync(`circuits/semaphore-${i}/semaphore-${i}.circom`, createCircuitCode(i))
        writeFileSync(`circuits/semaphore-${i}/input.json`, createInput(i))
    }
} else {
    console.error("Expected one argument!")
    process.exit(1)
}
