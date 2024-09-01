import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '72ch',
						h6: {
							color: '#555',
							fontSize: '0.8rem',
							marginTop: '-0.5rem'
						},
						img: {
							marginBottom: '0rem'
						},
						p: {
							fontSize: '15px'
						}
					}
				}
			},
			animation: {
				dot1: 'bounce '
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
