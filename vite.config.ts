import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist', // Configura el directorio de salida
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), // Puedes cambiar 'src' si necesitas apuntar a otro directorio
		},
	},
});
