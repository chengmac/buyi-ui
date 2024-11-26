import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'buyi-ui',
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
  alias: {
    '~': '/src',
  },
  themeConfig: {
    name: 'buyi',
  },
  base: process.env.NODE_ENV === 'production' ? `/buyi-ui/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/buyi-ui/` : '/',
});
