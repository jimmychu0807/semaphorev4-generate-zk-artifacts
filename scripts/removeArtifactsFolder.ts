import { rmSync } from "fs"

rmSync("zk-artifacts", { recursive: true, force: true })
