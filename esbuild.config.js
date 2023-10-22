/**
 * Load dependencies.
 */
import { exit } from 'node:process';
import { build } from 'esbuild';
// automatically exclude all node_modules from the bundled version
import { nodeExternalsPlugin } from 'esbuild-node-externals';

/**
 * Configuration.
 */
build({
  entryPoints: ['./src/worker.ts'],
  outdir: 'dist',
  bundle: true,
  minify: false,
  platform: 'node',
  sourcemap: true,
  target: 'node18',
  format: 'esm',
  plugins: [
    nodeExternalsPlugin(),
  ],
}).catch(() => exit(1));
