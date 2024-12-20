import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteEnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
	publicDir: './public',
	plugins: [react(), viteEnvironmentPlugin('all')],
	css: {
		modules: {
			scopeBehaviour: 'local',
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/mixins.scss";`,
			},
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
