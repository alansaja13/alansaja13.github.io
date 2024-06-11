/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'custom-radial-dark': 'radial-gradient(ellipse at top, #0d1927, transparent), radial-gradient(ellipse at bottom, #060223, transparent)',
				'custom-radial-light': 'radial-gradient(ellipse at top, #e0f7fa, transparent), radial-gradient(ellipse at bottom, #b2ebf2, transparent)', // Define tu gradiente claro aquí
			}
		},
	},
	plugins: [],
}
