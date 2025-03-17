import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteEnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
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
		port: Number.parseInt(process.env.MINI_APP_PORT!, 10),
		host: true,
		proxy: {
			'/api': {
				target: `http://server:${process.env.SERVER_PORT}`,
				changeOrigin: true,
			},
		},
	},
})
