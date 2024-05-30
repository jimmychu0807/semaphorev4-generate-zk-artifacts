import { mkdirSync, copyFileSync } from "fs"

if (process.argv.length === 4) {
    const start = Number(process.argv[2])
    const end = Number(process.argv[3])

    mkdirSync(`./p0tion-repo-artifacts`, { recursive: true })

    for (let i = start; i <= end; i += 1) {
        copyFileSync(`./p0tion-artifacts/semaphorev4-${i}_final.zkey`, `./p0tion-repo-artifacts/semaphore-${i}.zkey`)
    }
} else {
    console.error("Expected one argument!")
    process.exit(1)
}
