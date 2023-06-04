import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'buyi-ui',
  },
});
