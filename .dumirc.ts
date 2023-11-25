import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'buyi-ui',
  outputPath: 'dist',
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'buyi',
  },
});
