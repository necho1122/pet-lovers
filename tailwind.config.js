import lineClamp from '@tailwindcss/line-clamp';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/*.css'],
	theme: {
		extend: {},
	},
	plugins: [lineClamp],
};
