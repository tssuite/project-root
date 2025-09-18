<!--
@license
Copyright (c) 2025 tssuite

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @tssuite/project-root

`@tssuite/project-root` is a lightweight utility for reliably determining the
root directory of your TypeScript/Node.js project. It helps with configuration,
tooling, and scripts that need to locate the project root regardless of the
current working directory.

Features:

- Simple API for getting the project root path
- Zero dependencies
- TypeScript support

## Install

```bash
npm install @tssuite/project-root
```

## Usage Example

```typescript
import { projectRoot } from '@tssuite/project-root';

async function main() {
  const pr = await projectRoot();
  console.log(pr);
}

main();
```
