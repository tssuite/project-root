// @license
// Copyright (c) 2025 tssuite
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { ProjectRoot } from './project-root.ts';

export const example = () => {
  // Print methods
  const l = console.log;
  const h1 = (text: string) => l(`${text}`);
  const h2 = (text: string) => l(`  ${text.split('\n')}`);
  const p = (text: string) => l(`    ${text}`);

  // Example
  h1('ProjectRoot.example');
  h2('Returns an instance of the ProjectRoot.');
  const example = ProjectRoot.example;
  p(JSON.stringify(example, null, 2));
};

/*
// Run via "npx vite-node src/example.ts"
example();
*/
