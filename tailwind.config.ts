import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h6: {
							color: '#555',
							fontSize: '0.8rem',
							marginTop: '-0.5rem'
						},
						img: {
							marginBottom: '0rem'
						},
						p: {
							fontFamily: 'Georgia, "Palatino", Times, "Times New Roman", serif'
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
