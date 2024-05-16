import { derivePublicKey, deriveSecretScalar } from "@zk-kit/eddsa-poseidon"
import { LeanIMT } from "@zk-kit/imt"
import { poseidon2 } from "poseidon-lite"

export function createCircuitCode(num: number) {
    return `pragma circom 2.1.5;\n\ninclude "../semaphore/semaphore.circom";\n\ncomponent main {public [message, scope]} = Semaphore(${num});`
}

export function createInput(maxDepth: number) {
    const scope = 32
    const message = 43

    const privateKey = "privateKey"

    const publicKey = derivePublicKey(privateKey)

    const commitment = poseidon2(publicKey)

    const tree = new LeanIMT((a, b) => poseidon2([a, b]), [commitment, 1n])

    const { siblings: merkleProofSiblings, index } = tree.generateProof(0)

    const merkleProofIndices: number[] = []

    for (let i = 0; i < maxDepth; i += 1) {
        merkleProofIndices.push((index >> i) & 1)

        if (merkleProofSiblings[i] === undefined) {
            merkleProofSiblings[i] = BigInt(0)
        }
    }

    const input = {
        secret: deriveSecretScalar(privateKey),
        merkleProofLength: merkleProofSiblings.length,
        merkleProofIndices,
        merkleProofSiblings,
        scope,
        message
    }

    return JSON.stringify(input, (_, value) => (typeof value === "bigint" ? value.toString() : value))
}
