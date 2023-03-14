// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import proxy from './proxy';
import autoprefixer from 'autoprefixer';
import vars from './var';
export default defineConfig({
	plugins: [react()],
	build: {
		reportCompressedSize: false,
		outDir: 'build'
	},
	server: {
		proxy: proxy,
		port: 8080
	},
	resolve: {
		alias: {
			'@': '/src'
		}
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 87', 'ff > 78', 'ie >= 8', '> 1%']
				})
			]
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: vars
			}
		}
	}
});
