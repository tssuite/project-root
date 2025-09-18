// @license
// Copyright (c) 2025 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { existsSync } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';

// .............................................................................
/// Returns the root of the current project
export async function projectRoot(
  filePath: string | undefined = process.cwd(),
  depth = 10,
): Promise<string> {
  // Is path directory? If not, use parent directory
  const dir = (await fs.stat(filePath)).isFile()
    ? path.dirname(filePath)
    : filePath;

  const parent = dir.replaceAll('\\', '/').split('/');
  let restDepth = depth;
  while (
    parent.length > 0 &&
    !(parent.length == 1 && parent[0].trim().length == 0) &&
    restDepth > 0
  ) {
    const joined = parent.join('/');
    const packageJson = path.join(joined, 'package.json');

    if (existsSync(packageJson)) {
      return joined;
    }

    parent.pop();
    restDepth--;
  }

  throw new Error('No package.json found.');
}
