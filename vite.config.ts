import path from 'path';
import url from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  // base: '/NeuroSkills2_0',
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(dirname, 'src') },
      { find: 'node-fetch', replacement: 'isomorphic-fetch' },
    ],
  },
});
