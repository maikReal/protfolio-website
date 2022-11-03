/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mono': ['MonoLisa'],
			},
			colors: {
				bgColor: "#111111",
				textColor: "#999999",
				highlight: "#E4E4E4",
				titleColor: "#FFFFFF",
				accent: "#FFFFFF",
			}
			
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
