import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from '@unocss/svelte-scoped/vite';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	server: {
		port: 3000,
		host: true
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
