import { mkdirSync, copyFileSync } from "fs"

if (process.argv.length === 4) {
    const start = Number(process.argv[2])
    const end = Number(process.argv[3])

    mkdirSync(`./repo-artifacts`, { recursive: true })

    for (let i = start; i <= end; i += 1) {
        copyFileSync(
            `./build/semaphore-${i}/groth16/semaphore-${i}_js/semaphore-${i}.wasm`,
            `./repo-artifacts/semaphore-${i}.wasm`
        )
        copyFileSync(`./build/semaphore-${i}/groth16/semaphore-${i}_final.zkey`, `./repo-artifacts/semaphore-${i}.zkey`)
    }
} else {
    console.error("Expected one argument!")
    process.exit(1)
}
