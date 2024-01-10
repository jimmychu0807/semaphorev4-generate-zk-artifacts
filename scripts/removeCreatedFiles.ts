import { rmSync } from "fs"

if (process.argv.length === 4) {
    const start = Number(process.argv[2])
    const end = Number(process.argv[3])
    for (let i = start; i <= end; i += 1) {
        rmSync(`./circuits/semaphore-${i}`, { recursive: true, force: true })
    }
} else {
    console.error("Expected one argument!")
    process.exit(1)
}
