// @license
// Copyright (c) 2025 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { projectRoot } from './project-root.ts';

export const example = async () => {
  const pr = await projectRoot();
  console.log(pr);
};

/*
// Run via "npx vite-node src/example.ts"
example();
*/
