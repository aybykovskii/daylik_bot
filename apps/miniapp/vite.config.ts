import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import viteEnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  process.env = {
    ...process.env,
    ...env,
  }

  return {
    publicDir: './public',
    plugins: [react(), viteEnvironmentPlugin('all')],
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: '[local]_[hash:base64:5]',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: Number.parseInt(env.MINI_APP_PORT!, 10),
      host: true,
      proxy: {
        '/api': {
          target: `http://server:${env.SERVER_PORT}`,
          changeOrigin: true,
        },
      },
    },
  }
})
