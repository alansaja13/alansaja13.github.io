/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Paleta Japonesa Feudal
				washi: {
					50: '#FDFBF7',
					100: '#F5E6D3',
					200: '#E8D5C4',
					300: '#D4B5A0',
					400: '#C4A589',
				},
				crimson: {
					50: '#FFE5E5',
					100: '#FFCCCC',
					200: '#FF9999',
					300: '#FF6666',
					400: '#FF3333',
					500: '#C1272D',
					600: '#8B0000',
					700: '#660000',
					800: '#4D0000',
					900: '#330000',
				},
				sumi: {
					50: '#F5F5F5',
					100: '#E0E0E0',
					200: '#BDBDBD',
					300: '#9E9E9E',
					400: '#757575',
					500: '#424242',
					600: '#2C2C2C',
					700: '#1C1C1C',
					800: '#121212',
					900: '#0A0A0A',
				},
				koban: {
					light: '#F4E4C1',
					DEFAULT: '#D4AF37',
					dark: '#B8941E',
				}
			},
			fontFamily: {
				'serif': ['Cormorant', 'Crimson Text', 'Georgia', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Crimson Text', 'serif'],
			},
			backgroundImage: {
				'seigaiha': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50' fill='none' stroke='%23C1272D' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M0 75 Q25 50 50 75 T100 75' fill='none' stroke='%23C1272D' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M-50 50 Q-25 25 0 50 T50 50' fill='none' stroke='%23C1272D' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E\")",
				'asanoha': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L30 60 M0 30 L60 30 M15 15 L45 45 M45 15 L15 45' stroke='%23C1272D' stroke-width='0.3' opacity='0.1'/%3E%3C/svg%3E\")",
				'gradient-washi': 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 100%)',
				'gradient-crimson': 'linear-gradient(135deg, #C1272D 0%, #8B0000 100%)',
			},
			boxShadow: {
				'shoji': '0 2px 8px rgba(193, 39, 45, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
				'shoji-lg': '0 4px 16px rgba(193, 39, 45, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
				'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}
