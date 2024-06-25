import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "481px",
			md: "768px",
			lg: "1025px",
			xl: "1281px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			aquamarine: "#64ffda",
			"hawkes-blue": "#ccd6f6",
			manatee: "#8892b0",
			"echo-blue": "#a8b2d1",
			midnight: "#172a45",
			"black-pearl": "#0a192f",
		},
		fontFamily: {
			sans: ["Calibri", "sans-serif"],
			mono: ["SFMono-Regular", "monospace"],
		},
		fontSize: {
			"3xs": "0.66rem",
			"2xs": "0.72rem",
			xs: "0.77rem",
			sm: "0.94rem",
			base: "1rem",
			lg: "1.22rem",
			xl: "1.33rem",
			"2xl": "2.22rem",
			"3xl": "2.78rem",
		},
		extend: {},
	},
	plugins: [],
};
export default config;
