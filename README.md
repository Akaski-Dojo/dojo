## Getting Started

First, with **Node LTS** installed you should enable corepack in order to install pnpm:

```bash
corepack enable
```

After that, we're going to check if it worked by typing:

```bash
pnpm --version
```

And then just in case there's a new version, we're going to run:

```bash
pnpm install -g pnpm
```

Then install the dependencies with:

```
pnpm install
```
---
And now we're ready to go, you can:

- Run tests:
  - Specific kata: **`pnpm test [kataFolder]`**
  - All tests: **`pnpm test`**
- Run file:
  - **`pnpm play katafolder/filename.ts]`**
