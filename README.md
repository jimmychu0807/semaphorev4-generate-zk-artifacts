# Generate Semaphore v4 zk artifacts

This is a project to generate all the zk-artifacts for Semaphore v4.

> [!WARNING]
> These zk-artifacts are just for testing. Do not use them in production applications.

## Run Locally

### Clone the Repository

```bash
git clone https://github.com/vplasencia/semaphorev4-generate-zk-artifacts.git
```

### Install dependencies

```bash
yarn
```

### Generate the zk artifacts for tree depth 1 - 32

```bash
yarn run:all
```

The command will take some minutes (around 10 min in a MacBook Pro, Apple M2 Pro, 16 GB).

The zk-artifacts needed to use Semaphore will be inside a folder named `artifacts` with the following structure.

```text
├── artifacts
│   ├── 1
│   │   ├── semaphore.wasm
│   │   ├── semaphore.zkey
│   │   ├── semaphore.json
│   ├── 2
│   │   ├── semaphore.wasm
│   │   ├── semaphore.zkey
│   │   ├── semaphore.json
│   ├── 3
│   │   ├── semaphore.wasm
│   │   ├── semaphore.zkey
│   │   ├── semaphore.json

        ...

│   ├── 32
│   │   ├── semaphore.wasm
│   │   ├── semaphore.zkey
│   │   ├── semaphore.json
```
