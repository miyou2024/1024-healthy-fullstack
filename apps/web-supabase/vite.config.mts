import { defineConfig } from '@ittlr/vite-config';

export default defineConfig(async () => {
  return {
    application: {
      archiverPluginOptions: {
        outputDir: '../../dist/zip/web-supabase',
      }
    },
    vite: {
      build: {
        outDir: '../../dist/apps/web-supabase',
      },
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
