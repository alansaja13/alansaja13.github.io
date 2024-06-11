/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'custom-radial-dark': 'radial-gradient(ellipse at top, #0d1927, transparent), radial-gradient(ellipse at bottom, #060223, transparent)',
				'custom-radial-light': 'radial-gradient(circle, rgba(255,255,255,1) 7%, rgba(196,163,220,1) 99%)', 
			}
		},
	},
	plugins: [],
}

