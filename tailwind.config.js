module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		minWidth: {
			319: '319px',
		},
		minHeight: {
			85: '85vh',
		},
		fontFamily: {
			body: ['Helvetica'],
		},
		fontSize: {
			tiny: '.923rem',
		},
		backgroundColor: (theme) => ({
			facebook: '#F0F2F5',
			white: '#FFFFFF',
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
