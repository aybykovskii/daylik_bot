import path from 'node:path'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import viteEnvironmentPlugin from 'vite-plugin-environment'

dotenv.config({ path: '.env' })

export default defineConfig({
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
		port: Number.parseInt(process.env.MINI_APP_PORT!, 10) || 3000,
		host: true,
		proxy: {
			'/api': {
				target: `http://localhost:${process.env.SERVER_PORT}`,
				changeOrigin: true,
			},
			'/auth': {
				target: `http://localhost:${process.env.SERVER_PORT}`,
				changeOrigin: true,
			},
		},
	},
})
