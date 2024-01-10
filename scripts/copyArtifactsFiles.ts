import { mkdirSync, copyFileSync } from "fs"

if (process.argv.length === 4) {
    const start = Number(process.argv[2])
    const end = Number(process.argv[3])

    for (let i = start; i <= end; i += 1) {
        mkdirSync(`./artifacts/${i}`, { recursive: true })
        copyFileSync(
            `./build/semaphore-${i}/groth16/semaphore-${i}_js/semaphore-${i}.wasm`,
            `./artifacts/${i}/semaphore.wasm`
        )
        copyFileSync(`./build/semaphore-${i}/groth16/semaphore-${i}_final.zkey`, `./artifacts/${i}/semaphore.zkey`)
        copyFileSync(`./build/semaphore-${i}/groth16/verification_key.json`, `./artifacts/${i}/semaphore.json`)
    }
} else {
    console.error("Expected one argument!")
    process.exit(1)
}
