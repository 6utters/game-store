module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'black-primary': 'rgb(18, 18, 18)',
				'basic-black': '#202020',
				'basic-gray': '#2A2A2A',
				'gray-text': '#CCCCCC',
				'basic-yellow': '#f3d349',
				'error-red': '#c92b2b',
				online: '#52971c',
				white: '#ffffff',
				'border-gray': 'rgb(118, 118, 118)',
				'input-text': 'rgb(190,190,190)',
				'form-btn': '#887634',
				'overlay': 'rgba(0, 0, 0, 0.5)'
			},
		},
	},
	plugins: [],
}
