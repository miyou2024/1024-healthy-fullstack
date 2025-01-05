import { defineConfig } from '@ittlr/vite-config';

import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig(async () => {
  return {
    application: {
      archiverPluginOptions: {
        outputDir: '../../dist/zip/web-ele',
      }
    },
    vite: {
      build: {
        outDir: '../../dist/apps/web-ele',
      },
      plugins: [
        ElementPlus({
          format: 'esm',
        }),
      ],
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://localhost:5320/api',
            ws: true,
          },
        },
      },
    },
  };
});
