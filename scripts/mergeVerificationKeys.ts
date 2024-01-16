import { readFileSync, rmSync, writeFileSync } from "fs"

if (process.argv.length === 4) {
    const start = Number(process.argv[2])
    const end = Number(process.argv[3])

    const vkeys = JSON.parse(readFileSync(`./artifacts/${start}/semaphore.json`, "utf8"))

    vkeys.vk_delta_2 = []
    vkeys.IC = []

    for (let i = start; i <= end; i += 1) {
        const vkey = JSON.parse(readFileSync(`./artifacts/${i}/semaphore.json`, "utf8"))

        vkeys.vk_delta_2.push(vkey.vk_delta_2)
        vkeys.IC.push(vkey.IC)

        rmSync(`./artifacts/${i}/semaphore.json`)
    }

    writeFileSync("./verification-keys.json", JSON.stringify(vkeys, null, 4))
} else {
    console.error("Expected one argument!")
    process.exit(1)
}
