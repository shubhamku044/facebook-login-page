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
			100: '100vh',
		},
		fontFamily: {
			body: ['Helvetica'],
		},
		fontSize: {
			tiny: '.923rem',
			btn: '1.25rem',
			logo: '1.60rem',
		},
		outline: {
			blue: ['1px solid #166FE5', '-1px'],
		},
		backgroundColor: (theme) => ({
			facebook: '#F0F2F5',
			white: '#FFFFFF',
			facebookBlue: '#1877f2',
			facebookGreen: '#42b72a',
			facebookBlueHover: '#166FE5',
			facebookGreenHover: '#36a420',
		}),
		textColor: {
			facebookBlue: '#1877f2',
			white: '#FFFFFF',
		},
	},
	variants: {
		extend: { textColor: ['active'] },
	},
	plugins: [],
};
