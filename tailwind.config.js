module.exports = {
	purge: {
		content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/@components/**/*.{js,ts,jsx,tsx}'],
		options: {
			safelist: ['w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12',
			  'w-6/12', 'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12',
			  'md:w-1/12', 'md:w-2/12', 'md:w-3/12', 'md:w-4/12', 'md:w-5/12',
			  'md:w-6/12', 'md:w-7/12', 'md:w-8/12', 'md:w-9/12', 'md:w-10/12', 'md:w-11/12']
		  }
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
			},
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
