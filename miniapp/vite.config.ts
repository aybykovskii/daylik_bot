import path from 'node:path'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import viteEnvironmentPlugin from 'vite-plugin-environment'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

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
			'~types': path.resolve(__dirname, '../types'),
			'~api': path.resolve(__dirname, '../api'),
			'~i18n': path.resolve(__dirname, '../i18n'),
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 3000,
		host: true,
		proxy: {
			'/api': {
				target: `http://localhost:${process.env.SERVER_PORT}`,
				changeOrigin: true,
			},
		},
	},
})
