import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
	plugins: [react()],
	root: 'src',
	// server: {
	// 	open: 'public/index.html',
	// },
	// build: {
	// 	rollupOptions: {
	// 		input: {
	// 			app: '/public/index.html',
	// 		},
	// 	},
	// 	outDir: '/public',
	// },
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@service': path.resolve(__dirname, './src/service'),
		},
	},
});
