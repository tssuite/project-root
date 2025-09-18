// @license
// Copyright (c) 2025 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { mkdir, rm } from 'fs/promises';
import { tmpdir } from 'os';
import * as path from 'path';
import { describe, expect, it } from 'vitest';

import { projectRoot } from '../src/project-root.js';

describe('projectRoot(path)', () => {
  describe('returns the project root of the node project on path', () => {
    it('with path being a directory', async () => {
      const cwd = process.cwd().replaceAll('\\', '/');
      await expect(projectRoot(path.join(cwd, 'test'))).resolves.toBe(cwd);
    });

    it('with path being a file', async () => {
      const cwd = process.cwd().replaceAll('\\', '/');
      await expect(
        projectRoot(path.join(cwd, 'test', 'project-root.spec.ts')),
      ).resolves.toBe(cwd);
    });
  });

  it('throws, when no package.json is found', async () => {
    const tmpDir = path.join(tmpdir(), 'tools_test');
    await mkdir(tmpDir, { recursive: true });
    let message: string[] = [];
    try {
      await projectRoot(tmpDir);
    } catch (e: any) {
      message = e.message.toString().split('\n');
    }
    expect(message).toEqual(['No package.json found.']);
    await rm(tmpDir, { recursive: true });
  });
});
